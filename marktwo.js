var readlineSync = require('readline-sync');

var score = 0;
var one = 1;

var highScore = [{
  name: "Aakansha",
  score: "3 point",
}, {
  name: "Deepak",
  score: "1 point",
}, {
  name: "Sandhya",
  score: "2 point",
}]

var questions = [{
  question: "\nRainbow consist of how many colours?\n",
  answer: "7",
}, {
  question: "How many seconds make one hour?\n",
  answer: "3600",
}, {
  question: "Which animal is known as the 'Ship of the Desert?\n",
  answer: "Camel",
}, {
  question: "Name the national flower of India?\n",
  answer: "Lotus Flower",
}, {
  question: "What is the National song of India?\n",
  answer: "Vande Mataram",
}]

function quiz(question, answer) {
  var userName = readlineSync.question(question);
  if (userName === answer) {
    score = score + one;
    console.log("You are right!");
    console.log("Your score has a change of " + "+1" + "\n");
  } else {
    score = score - one;
    console.log("You are wrong!");
    console.log("Your score has a change of " + "-1" + "\n");
  }

}

var userinput = readlineSync.question("What is your name?\n");
console.log("Hello and Welcome! to the QUIZ " + userinput + "\nThis QUIZ has been made to test the General Knowledge of the user," + "\nI hope you enjoy the QUIZ," + "\nGood Luck!");

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}



console.log("You scored a total of " + score + " point");

console.log("Thanks for trying out the QUIZ");

console.log("\n--------------------------------")

console.log("Checkout the scoreboard")

console.log("--------------------------------")

for (var j = 0; j < highScore.length; j++) {
  var currentScore = highScore[j];
  console.log(currentScore.name, " : ", currentScore.score);
}

console.log("--------------------------------")

console.log("\nIf you scored higher. \nSend me a screenshot and I will update the scoreboard.")