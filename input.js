function inputForm(model){
    const {Bill, Percentage} = model
    const billMessage = "Bill Amount?"
    const tipMessage = "Tip(%)?"
    return inquirer.prompt([
        {
            name: "Bill",
            type: "input",
            billmessage: billMessage,
            default: Bill,
            validate: function(value){
                if (isNaN(value)){
                    return "Erase and enter a number"
                }else{
                    return true
                }
            }
        },
        {
            name: "Percentage",
            type: "input",
            tipMessage: tipMessage,
            default: Percentage,
            validate: function(value){
                if (isNaN(value)){
                    return "Erase and enter a number"
                }else{
                    return true
                }
            }
        }
    ])
}
