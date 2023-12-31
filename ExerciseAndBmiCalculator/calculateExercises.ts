interface exerciseCalculatorResult{
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number 
  }
  
export const calculateExercises = (target: number, dailyExerciseHours: number[]): exerciseCalculatorResult => {
    
    const average: number = dailyExerciseHours.reduce((a,b) => a + b) / dailyExerciseHours.length;
    
    let rating: number;
    let ratingDescription: string;

    if(average < target){
        rating = 1;
        ratingDescription = "Didn't achieve target";
    } else if (average === target) {
        rating = 2;
        ratingDescription = "Met the target";
    } else if (average > target) {
        rating = 3;
        ratingDescription = "Outperformed";
    } else {
        rating = -1;
        ratingDescription = "err";
    }

    return {
        periodLength: dailyExerciseHours.length,
        trainingDays: dailyExerciseHours.filter(hours => hours > 0).length,
        success: average >= target,
        rating,
        ratingDescription,
        target,
        average 
    };
};