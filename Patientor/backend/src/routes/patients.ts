import express from "express";
import patientService from "../services/patients";

const router = express.Router();

router.get("/", (_, res) => {
    res.json(patientService.getNonSensitivePatientsInformation());
});

router.post("/", (req, res) => {

    const {name, dateOfBirth, ssn, gender, occupation} = req.body;

    const addedPatient = patientService.addPatient(
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    );
    res.json(addedPatient);
});

export default router;

// export interface Patient {
//     id: string,
//     name: string,
//     dateOfBirth: string,
//     ssn: string,
//     gender: string,
//     occupation: string
// }
