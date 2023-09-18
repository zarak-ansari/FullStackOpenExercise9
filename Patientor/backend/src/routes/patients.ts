import express from "express";
import patients from "../services/patients";

const router = express.Router();

router.get("/", (_, res) => {
    res.json(patients.getNonSensitivePatientsInformation());
});

export default router;