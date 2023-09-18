import express from "express";
import diagnoses from "../services/diagnoses";

const router = express.Router();

router.get("/", (_, res) => {
    res.json(diagnoses.getDiagnoses());
});

export default router;