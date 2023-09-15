import express from "express";
import { calculateBmi } from "./calculateBmi";

const app = express();

app.get('/hello', (_, res) => {
    res.send("Hello Full Stack!"); 
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    if(isNaN(height) || isNaN(weight)){
        res.status(400).json({
            error:"malformatted parameters",
        });
    } else {
        res.json({
            height,
            weight,
            bmi: calculateBmi(height, weight)
        });
    }

});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});