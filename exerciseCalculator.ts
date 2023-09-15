interface exerciseCalculatorResult{
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number 
}

const calculateExercises = (target: number, dailyExerciseHours: number[]): exerciseCalculatorResult => {
    
    const average: number = dailyExerciseHours.reduce((a,b) => a + b) / dailyExerciseHours.length
    
    let rating: number
    let ratingDescription: string

    if(average < target){
        rating = 1
        ratingDescription = "Didn't achieve target"
    } else if (average === target) {
        rating = 2
        ratingDescription = "Met the target"
    } else if (average > target) {
        rating = 3
        ratingDescription = "Outperformed"
    } else {
        rating = -1
        ratingDescription = "err"
    }

    return {
        periodLength: dailyExerciseHours.length,
        trainingDays: dailyExerciseHours.filter(hours => hours > 0).length,
        success: average >= target,
        rating,
        ratingDescription,
        target,
        average 
    }
}

const parseArguments = (args: string[]) => {
    if(args.length < 4) throw new Error("Not enough arguments")


    const slicedArguments = args.slice(2).map(a => {
        if(isNaN(Number(a))) throw new Error("Cannot pass in strings as arguments")
        return Number(a)
    })

    return ({
        target: slicedArguments[3],
        dailyExerciseHours: slicedArguments.slice(1)
    })   
}

const commandLineArguments = process.argv
try {
    const { target, dailyExerciseHours } = parseArguments(process.argv)
    console.log(calculateExercises(target, dailyExerciseHours))
} catch (error) {
    let errorMessage = "Something bad happened: "
    if(error instanceof Error){
        errorMessage += error.message
    }
    console.log(errorMessage)
}