import { NonSensitivePatientsInformation, Patient } from "./types";

import data from "../data/patients";

const patients : Patient[] = data;

const getNonSensitivePatientsInformation = (): NonSensitivePatientsInformation[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation }) => ({
        id, name, dateOfBirth, gender, occupation
    }));
};

export default {
    getNonSensitivePatientsInformation,
};
