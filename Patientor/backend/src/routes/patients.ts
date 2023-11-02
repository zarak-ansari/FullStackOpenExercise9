import express from "express";
import patientService from "../services/patients";
import { NewPatient } from "../types";
import { toNewPatient } from "../utils";

const router = express.Router();

router.get("/", (_, res) => {
    res.json(patientService.getNonSensitivePatientsInformation());
});

router.get("/:id", (req, res) => {
    const patientWithId = patientService.getPatientById(req.params.id);
    if(patientWithId){
        res.json(patientWithId);
    } else {
        const errorMessage = 'Patient not found with this id';
        res.status(400).send(errorMessage);
    }
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