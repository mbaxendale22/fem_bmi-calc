import { renderMetricForm, renderImperialForm } from './formRenderFunctions.js'
import {
    calculationMetricBMI,
    calculateImperialBMI,
} from './BMICalcFunctions.js'
const systemForm = document.querySelector('#system-form')
const calculationForm = document.querySelector('#calculation-form')
const metric = document.querySelector('#metric')
const imperial = document.querySelector('#imperial')

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

calculationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (metric.checked) {
        let height = e.target.height.value
        let weight = e.target.weight.value
        const { bmi, bmiCategory, idealWeightMin, idealWeightMax } =
            calculationMetricBMI(height, weight)
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
    }
})

