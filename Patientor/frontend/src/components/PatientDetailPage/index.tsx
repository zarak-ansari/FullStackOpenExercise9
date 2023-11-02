import { useParams } from "react-router-dom";

import patientService from "../../services/patients";
import { useEffect, useState } from "react";
import { Patient } from "../../types";
import { Typography } from "@mui/material";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import EntryComponent from "./EntryComponent";

const PatientDetailPage = () => {
    const { id } = useParams();
    const idForQuery = id ? String(id) : '';

    const [patient, setPatient] = useState<Patient>();

    useEffect(() => {
        const fetchPatient = async () => {
          const patientFromBackend = await patientService.getById(idForQuery);
          setPatient(patientFromBackend);
        };
        void fetchPatient();
      }, [idForQuery]);

    if(!patient) {
        return <p>Patient not found</p>;
    }

    return (
        <div>
            <Typography variant="h4">
                {patient.name}
                {patient.gender === 'male' && <MaleIcon />}
                {patient.gender === 'female' && <FemaleIcon />}
                {patient.gender === 'other' && <TransgenderIcon />}
            </Typography>
            <Typography variant="body1">
                SSN: {patient.ssn}
            </Typography>
            <Typography variant="body1">
                Occupation: {patient.occupation}
            </Typography>
            <Typography variant="h5">Entries</Typography>
            <div>
                {patient.entries.map(entry => <EntryComponent key={entry.id} entry={entry} /> )}
            </div>
        </div>
    );

};

export default PatientDetailPage;