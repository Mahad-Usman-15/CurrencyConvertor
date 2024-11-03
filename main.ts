import inquirer from "inquirer"
import chalk from "chalk"
let conversion={
    PKR:{
        "USD":0.0036,
        "SAR":0.013,
        "POUNDS":0.0028,
        "PKR":1
    },
    USD:{
        "PKR":278.33,
        "SAR":3.75,
        "POUNDS":0.780,
        "USD":1
    },
    SAR:{
        "PKR":74.19 ,
        "USD":0.27,
        "POUNDS":0.21,
        "SAR":1
    },
    POUNDS:{
        "PKR":355.27 ,
        "USD":1.28,
        "POUNDS":1,
        "SAR":4.79
    },
}
let input:{
    from:"PKR"|"USD"|"POUNDS"|"SAR",
    to:"PKR"|"USD"|"POUNDS"|"SAR",
    amount:number

}=await inquirer.prompt([
    {
    name:"from",
    type:"list",
    message:(chalk.green("Enter your currency")),
    choices:["PKR","USD","POUNDS","SAR"]

},
{
    name:"to",
    type:"list",
    message:(chalk.red("Enter your conversion currency")),
    choices:["PKR","USD","POUNDS","SAR"]
},
{
    name:"amount",
    type:"number",
    message:(chalk.blue("Enter your amount")),

},

])
let{from,to,amount}=input
if(from && to && amount){
    let conversion2=conversion [from][to]*amount
    let rounded=Math.round(conversion2*10)/10
console.log(`Your conversion from ${from} to ${to} is ${rounded} `)
}

