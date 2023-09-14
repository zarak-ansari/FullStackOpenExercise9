const calculateBmi = (heightInCentimeters: number, weightInKg: number): string => {
    const bmi = weightInKg / (heightInCentimeters / 100) ** 2

    if(bmi < 16){
        return "Underweight (Severe thinness)"
    } else if (bmi < 17) {
        return "Underweight (Moderate thinness)"
    } else if (bmi < 18.5) {
        return "Underweight (Mild thinness)"
    } else if (bmi < 25) {
        return "Normal range (healthy weight)"
    } else if (bmi < 30) {
        return "Overweight (Pre-obese)"
    } else if (bmi < 35) {
        return "Obese (Class I)"
    } else if (bmi < 40) {
        return "Obese (Class II)"
    } else if (bmi >= 40) {
        return "Obese (Class III)"
    } else {
        return "something went wrong"
    }
}

console.log(calculateBmi(180, 74))

