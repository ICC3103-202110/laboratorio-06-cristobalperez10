function ConvertTo(from,to,temperature){
    console.log(from,to)
    if(from === "Kelvin" && to === "Celsius"){
        return KelToCel(temperature)
    }
}



function CelToFar(temperature){
    return 1.8*parseInt(temperature) + 32
}
function CelToKel(temperature){
    return parseInt(temperature) + 273.15
}
function FarToCel(temperature){
    return 1.8*(parseInt(temperature) - 32)
}

function FarToKel(temperature){
    return FarToCel(parseInt(temperature)) + 273.15
}

function KelToFar(temperature){
    return 1.8*(parseInt(temperature) - 273.15) + 32
}

function KelToCel(temperature){
    return parseInt(temperature) - 273.15
}

function update(leftValue,leftUnit,rightUnit, model){
    const newLeftValue = leftValue
    const newLeftUnit = leftUnit
    const newRightValue = ConvertTo(leftUnit,rightUnit,leftValue)
    const newRightUnit = rightUnit
    return {
        ...model,
        leftValue: newLeftValue,
        leftUnit: newLeftUnit,
        rightValue: newRightValue,
        rightUnit: newRightUnit,
    }

}

module.exports = {
    update
}