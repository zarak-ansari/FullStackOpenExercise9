import express from "express";
import { calculateBmi } from "./calculateBmi";
import { calculateExercises } from "./calculateExercises";

const app = express();

app.use(express.json());

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

app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const target = req.body.target; 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const dailyExerciseHours = req.body.daily_exercises;

    if(!target || !dailyExerciseHours){
        res.status(400).json({error:"missing parameters"});
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if(isNaN(target)){
        res.status(400).json({error:"malformatted parameters"});
    }
    
    let errorFlag: boolean = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    dailyExerciseHours.forEach((element: any) => {
        if((typeof element) !== 'number'){
            errorFlag = true;
        }
    });
    if(errorFlag){
        res.status(400).json({error:"malformatted parameters"});
    } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        res.json(calculateExercises(target, dailyExerciseHours));
    }
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});