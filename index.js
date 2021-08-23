var readlineSync = require("readline-sync");
var userName = readlineSync.question("Enter your name:");
console.log("Hi "+userName+" Let's check How well you know Football!");

var scoreObj = [{name:"Akhilesh", scores:5}, {name:"Sanju", scores:4}];

var point = 0;
var count = 0;

function FootballQuiz(question, answer)
{
   var ans = readlineSync.question(question);

   if(ans == answer)
   {
     point++;
     console.log("Correct answer!!");
   }
   else
   {
     console.log("Wrong answer!!");
   }

   console.log("Score:"+point);
   console.log("----------------");
   count++;

   if(point == 5)
   {
     console.log("Congrats! You got all right!!");
   }

   if(count == 5)
   {
     ShowHighScores(point);
   }
}

function RunQuizz()
{
  var questions = [{question:"FC Barcelona plays in which league?", answer:"la liga"}, {question:"Which club won the champions league in 2020-2021 season?", answer:"chelsea"}, {question:"Who has won the most number of Ballon dors?", answer:"messi"}, {question:"Which country won the recent Copa America?", answer:"argentina"}, {question:"Which country won the recent euro finals?", answer:"italy"}];

  for(var i = 0; i < questions.length; i++)
  {
    var current = questions[i];
    FootballQuiz(current.question, current.answer);
  }

}

function ShowHighScores(score)
{
  console.log("High Scores List:");
  scoreObj.map(score => console.log(score.name, " : ", score.scores));
}

RunQuizz();
