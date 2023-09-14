interface exerciseCalculatorResult{
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number 
}

const calculateExercises = (dailyExerciseHours: number[]): exerciseCalculatorResult => {
    
    const TARGET: number = 2

    const average: number = dailyExerciseHours.reduce((a,b) => a + b) / dailyExerciseHours.length
    
    let rating: number
    let ratingDescription: string

    if(average < TARGET){
        rating = 1
        ratingDescription = "Didn't achieve target"
    } else if (average === TARGET) {
        rating = 2
        ratingDescription = "Met the target"
    } else if (average > TARGET) {
        rating = 3
        ratingDescription = "Outperformed"
    }

    return {
        periodLength: dailyExerciseHours.length,
        trainingDays: dailyExerciseHours.filter(hours => hours > 0).length,
        success: average >= TARGET,
        rating,
        ratingDescription,
        target: TARGET,
        average 
    }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]))