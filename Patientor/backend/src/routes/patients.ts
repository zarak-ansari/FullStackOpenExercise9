import express from "express";
import patientService from "../services/patients";
import { NewPatient } from "../services/types";
import { toNewPatient } from "../utils";

const router = express.Router();

router.get("/", (_, res) => {
    res.json(patientService.getNonSensitivePatientsInformation());
});

router.post("/", (req, res) => {
    try{
        const newPatientData: NewPatient = toNewPatient(req.body);
        const addedPatient = patientService.addPatient(newPatientData);
        res.json(addedPatient);
    } catch (error: unknown) {
        let errorMessage = 'Error: Something went wrong';
        if(error instanceof Error){
            errorMessage += error.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default router;