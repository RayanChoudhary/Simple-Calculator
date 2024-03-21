#! /usr/bin/env node
//this code is also known AS 
// SHABANG

import inquirer from "inquirer";

const answer = await inquirer.prompt ([
  {  message: "Enter first number", type: "number", name: "firstnumber" },
  {  message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of  the operators to perform  operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//CONDITIONAL STATEMENT
if (answer.operator === "Addition"){
console.log(answer.firstnumber + answer.secondNumber) ;
} else if (answer.operator === "Subtraction"){
  console.log(answer.firstnumber - answer.secondNumber) ;
}  else if (answer.operator === "Multiplication"){
  console.log(answer.firstnumber * answer.secondNumber) ;
}  else if (answer.operator === "Division"){
  console.log(answer.firstnumber / answer.secondNumber) ;
} 
else {"please select correct operator"}


