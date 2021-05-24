const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")
const {right} = require("inquirer/lib/utils/readline")

function getTitle(){  // TITULO //
    return chalk.blueBright(
        figlet.textSync(
            "Unit Converter App" ,
            {
                horizontalLayout: "full",
                font: "Nancyj-Underlined"
            }
        )
    )    
}

function getTable(model){   // ARMAR EL TABLERO //
    const{leftValue} = model
    const{leftUnit} = model
    const{rightValue} = model
    const{rightUnit} = model
    return[     // TITULO DE LA TABLA Y SU VALOR //
        {"Left Value": leftValue,
        "Left Unit": leftUnit,
        "Right Value": rightValue,
        "Right Unit": rightUnit}    
    ]
}

function inputForm(model){  // PREGUNTAS - INPUTS //
    const {leftValue,leftUnit,rightValue,rightUnit,temperatureToChange} = model
    const Message1 = "Which temperature do you want to convert?: "  // Respuesta Y/n //
    const Message2 = "Temperature value to convert?: " // Recibe un Int //
    const Message3 = "From?: "
    const Message4 = "To?: "
    return inquirer.prompt([
        {
            name: "temperatureToChange",
            type: "list",
            message: Message1,
            choices: ["Left Temperature","Right Temperature"]
        },
        {
            name: "leftValue",
            type: "input",
            message: Message2,
            default: leftValue,
            validate: function(value){
                if (isNaN(value)){
                    return "Enter a number please"
                }else{
                    return true
                }
            }
        },
        {
            name: "leftUnit",
            type: "list",
            message: Message3,
            choices:["Celsius","Kelvin","Fahrenheit"],
            default: leftUnit
        },
        {
            name: "rightUnit",
            type: "list",
            message: Message4,
            choices:["Celsius","Kelvin","Fahrenheit"],
            default: rightUnit
        }

    ])
}


function view(model){  // MOSTRAR //
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {   // EXPORTAR //
    view,
    inputForm,
}