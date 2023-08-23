import { renderMetricForm, renderImperialForm } from './formRenderFunctions.js'
import {
    calculationMetricBMI,
    calculateImperialBMI,
} from './BMICalcFunctions.js'
const systemForm = document.querySelector('#system-form')
const calculationForm = document.querySelector('#calculation-form')
const metric = document.querySelector('#metric')
const imperial = document.querySelector('#imperial')
const bmiResults = document.querySelector('#bmi-results')

function setSystem() {
    if (metric.checked) {
        renderMetricForm()
    } else if (imperial.checked) {
        renderImperialForm()
    }
}

metric.addEventListener('click', () => {
    setSystem()
})

imperial.addEventListener('click', () => {
    setSystem()
})

window.addEventListener('DOMContentLoaded', () => {
    setSystem()
})

function renderBMIResults(
    container,
    bmi,
    bmiCategory,
    idealWeightMin,
    idealWeightMax,
    unit
) {
    container.innerHTML = `
    <p class="body-bold" id="bmi-heading">Your BMI is</p>
    <h3 class="h2" id="bmi-result">${bmi}</h3>
    <p class="body-sm" id="bmi-prognosis">
    ${bmiCategory.message} with an ideal weight of <strong>${idealWeightMin}${unit} - ${idealWeightMax}${unit}</strong>
    </p>
`
}

calculationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (metric.checked) {
        let height = e.target.height.value
        let weight = e.target.weight.value
        const { bmi, bmiCategory, idealWeightMin, idealWeightMax } =
            calculationMetricBMI(height, weight)
        renderBMIResults(
            bmiResults,
            bmi,
            bmiCategory,
            idealWeightMin,
            idealWeightMax,
            'kg'
        )
    } else if (imperial.checked) {
        let feet = e.target.feet.value
        let inches = e.target.inches.value
        let stone = e.target.stone.value
        let pounds = e.target.pounds.value

        const { bmi, bmiCategory, minWeight, maxWeight } = calculateImperialBMI(
            feet,
            inches,
            stone,
            pounds
        )
        renderBMIResults(
            bmiResults,
            bmi,
            bmiCategory,
            minWeight,
            maxWeight,
            'lbs'
        )
    }
})
