var readlineSync = require ('readline-sync');
var score = 0
var userName =  readlineSync.question('What is your Name ?');
console.log  ("welcome "+ userName  +" to DO YOU KNOW Somil ? ");
 console.log('---------------------');

// function 
function play(question, answer){
  var userAnswer = readlineSync.question(question)

  if(userAnswer === answer){
    console.log('You are right');
    score = score + 1 
  } else {
    console.log('You are wrong')
  }
   console.log('Score is ' , score);
   console.log('------------------');  
  }

  var questions = [{
   question: "Where do I live ?  " ,
   answer: "guna"  },
  { question: "My favourite superhero would be ?  "  ,
     answer: "ironman"  
  } ,
  {
   question: "Which college I have studies ?  " ,
   answer: "sati"  },
  { question: " What is my favorite series on Netflix?  "  ,
     answer: "money heist"  
  } ,
  {
   question: " When is my birthday year ? " ,
   answer: "2002"  },
  { question: "  What is my favorite ice cream flavor? "  ,
     answer: "chocolate"  
  } ];

 for (var i=0; i < questions.length ; i++){
   var currentQuestion = questions[i];
play(currentQuestion.question,currentQuestion.answer)}
console.log("---------------------------");
console.log('Yeh! your scores is ' , score);
console.log("----------------------------");
console.log('SEND A SCREENSHOT OF YOUR  SCORES');