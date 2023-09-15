import { calculateExercises } from "./calculateExercises";

const parseArguments = (args: string[]) => {
    if(args.length < 4) throw new Error("Not enough arguments");


    const slicedArguments = args.slice(2).map(a => {
        if(isNaN(Number(a))) throw new Error("Cannot pass in strings as arguments");
        return Number(a);
    });

    return ({
        target: slicedArguments[3],
        dailyExerciseHours: slicedArguments.slice(1)
    });   
};

try {
    const { target, dailyExerciseHours } = parseArguments(process.argv);
    console.log(calculateExercises(target, dailyExerciseHours));
} catch (error) {
    let errorMessage = "Something bad happened: ";
    if(error instanceof Error){
        errorMessage += error.message;
    }
    console.log(errorMessage);
}