import { calculateBmi } from "./calculateBmi";

const processArguments = (args: string[]) => {

    if(args.length < 4) throw new Error("Not enough arguments");
    if(args.length > 4) throw new Error("Too many arguments");
    
    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))){
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };
    } else {
        throw new Error("Arguments must be numbers");
    }

};

if(process.argv){
    const {height, weight} = processArguments(process.argv);
    
    console.log(calculateBmi(height, weight));
}