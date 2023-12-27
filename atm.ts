import inquirer from "inquirer";

let randomData1 = Math.floor(Math.random()*100000)
let userIDs = ["zuhaib",'kamran12','fahad@2','ali30','hasan.j']


let atm:{userID:string, userPin:number} = await inquirer.prompt([{
    type: "string",
    name: "userID",
    message: "Enter your User ID"
},
{
    type: "number",
    name: "userPin",
    message: "Enter your PIN"
}
])

if (userIDs.includes(atm.userID)){
    console.log(`\n ---- WELCOME ${atm.userID.toLocaleUpperCase()}! ----`)

let transaction:{trans:string} = await inquirer.prompt([{
    type:"list",
    name: "trans",
    message: `\nWhat transaction would you like to perform today?`,
    choices: ["Balance Enquiry","Cash Withdraw","Cash Deposit","Bill Payment","Money Transfer"]
}])

if (transaction.trans === "Balance Enquiry"){
    console.log(`Your current Balance is ${randomData1}`)
} 
else if (transaction.trans === "Cash Withdraw"){
    console.log(`Avaiable Balance = ${randomData1}`);
   
    let withdraw:{trans:number} = await inquirer.prompt([{
        type:"number",
        name: "trans",
        message: `\nInput the amount you want to withdraw: `
    }])
    if (randomData1<withdraw.trans){
        console.log(`You dont have enough balance`)
    } else { 
        console.log(`Please collect your Cash. \nYour remaining Balance is ${randomData1 - withdraw.trans}`)
    }
} 
else if (transaction.trans === "Cash Deposit"){
    console.log(`Avaiable Balance = ${randomData1}`);
   
    let deposit:{trans:number} = await inquirer.prompt([{
        type:"number",
        name: "trans",
        message: `\nInput the amount you want to deposit: `
    }])
    if (randomData1<deposit.trans){
        console.log(`You dont have enough balance`)
    } else { 
    console.log(`\nYour Balance is increased with an amount of ${deposit.trans}\nYour current Balance is now ${randomData1 + deposit.trans}`)
    }
}
else if (transaction.trans === "Bill Payment"){
    console.log(`Avaiable Balance = ${randomData1}`);
   
    let bill:{utility:string, amount:number} = await inquirer.prompt([
        {
        type:"list",
        name: "utility",
        message: `\nSelect from Below: `,
        choices: ['K-Electric (KE)','Sui Southern Gas Company (SSGC)','Karachi Water Supply Board (KWSB)','Mobile Bills','Landline']
        }, 
        {
        type: "number",
        name: "amount",
        message: `\nInput Bill Amount: `
        }
    ])
    if (randomData1<bill.amount){
        console.log(`You dont have enough balance`)
    } else { console.log(`\nYour Transaction is successful with an amount of ${bill.amount}\nYour current Balance is now ${randomData1 - bill.amount}`)
}
}
else if (transaction.trans === "Money Transfer"){
    console.log(`Avaiable Balance = ${randomData1}`);
   
    let transfer:{trans:string, amount:number} = await inquirer.prompt([
        {
        type:"list",
        name: "trans",
        message: `\nSelect from Below: `,
        choices: ['HBL','UBL','Meezan','U-Paisa','Easy-Paisa']
        }, 
        {
        type: "number",
        name: "amount",
        message: `\nInput Amount to Transfer: `
        }
    ])
    if (randomData1<transfer.amount){
        console.log(`You dont have enough balance`)
    } else {console.log(`\nYour Transaction is successful with an amount of ${transfer.amount}\nYour current Balance is now ${randomData1 - transfer.amount}`)
}
}

}

else {
    console.log(`\nIncorrect User ID, please log in again!`)
    
}

console.log(`\n---- Thankyou ${atm.userID.toLocaleUpperCase()} for Banking with us!\n---- Come again!
\n--------------------------------------------\n|    Please log in for next transaction    |\n--------------------------------------------`)

