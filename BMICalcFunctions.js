const bmiCategories = [
    {
        category: 'Underweight',
        min: 0,
        max: 18.5,
        color: 'red',
        message: 'Your BMI suggests you are underweight.',
    },
    {
        category: 'Normal',
        min: 18.5,
        max: 25,
        color: 'green',
        message: 'Your BMI suggests you are a healthy weight.',
    },
    {
        category: 'Overweight',
        min: 25,
        max: 30,
        color: 'orange',
        message: 'Your BMI suggests you are overweight.',
    },
    {
        category: 'Obese',
        min: 30,
        max: 100,
        color: 'red',
        message: 'Your BMI suggests you are obese.',
    },
]

export function calculationMetricBMI(height, weight) {
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2)

    const idealWeightMin = ((height / 100) * (height / 100) * 18.5).toFixed(1)
    const idealWeightMax = ((height / 100) * (height / 100) * 25).toFixed(1)

    let [bmiCategory] = bmiCategories.filter(
        (category) => category.min <= bmi && category.max >= bmi
    )
    return {
        bmi,
        bmiCategory,
        idealWeightMin,
        idealWeightMax,
    }
}

export function calculateImperialBMI(feet, inches, stone, pounds) {
    let height = (feet * 12 + parseInt(inches)) * 0.0254
    let weight = (stone * 14 + parseInt(pounds)) * 0.453592
    let bmi = (weight / (height * height)).toFixed(2)

    const totalInches = feet * 12 + parseInt(inches)

    const { minWeight, maxWeight } = calculateImperialMinMaxWeight(
        parseInt(totalInches)
    )

    let [bmiCategory] = bmiCategories.filter(
        (category) => category.min <= bmi && category.max >= bmi
    )
    return {
        bmi,
        bmiCategory,
        minWeight,
        maxWeight,
    }
}

function calculateImperialMinMaxWeight(inches) {
    const heightInInches = inches
    const heightInMeters = heightInInches * 0.0254
    const minWeight = Math.floor(
        (heightInMeters * heightInMeters * 18.5) / 0.453592
    )
    const maxWeight = Math.floor(
        (heightInMeters * heightInMeters * 25) / 0.453592
    )
    return {
        minWeight,
        maxWeight,
    }
}
