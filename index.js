#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
const answer = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
console.log(answer);
