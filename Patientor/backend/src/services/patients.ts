import { NonSensitivePatientsInformation, Patient, NewPatient } from "./types";
import { v1 as uuid } from "uuid";
import data from "../data/patients";

const patients : Patient[] = data;

const getNonSensitivePatientsInformation = (): NonSensitivePatientsInformation[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation }) => ({
        id, name, dateOfBirth, gender, occupation
    }));
};

const addPatient = (patientData: NewPatient): Patient => {

    const newPatient = {
        id: uuid(),
        ...patientData
    };

    patients.push(newPatient);

    return newPatient;
};

const getPatientById = (id: string): Patient | undefined => {
    const requiredPatient = patients.find(patient => patient.id === id);
    return requiredPatient;
};

export default {
    getNonSensitivePatientsInformation,
    addPatient,
    getPatientById
};
