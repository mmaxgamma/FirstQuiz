const quizContent = document.getElementById("quizContainer");
const question = document.getElementById("question");
let answerOne = document.getElementById("answerOne");
let answerTwo = document.getElementById("answerTwo");
let answerThree = document.getElementById("answerThree");
let answerFour = document.getElementById("answerFour");
let answerChoices = [answerOne, answerTwo, answerThree, answerFour];
let score = 0;
const answerCheck = (userChoice, correctChoice) => {
    if (userChoice == correctChoice) {
        score++;
        alert("Correct!");
        //CSS code to glow green
    }


    else {
        //CSS code to glow red 
        alert("Incorrect!");
    }
}

const buildQuiz = () => {
    let index = 0;

    //Should I try and split up the question numbers?
    const questionAnswer = [{question: "What's 2+2?", answers: ['0', '4', '6', '3'], correctAnswer: '4'}, 
    {question: "What's 3+3?", answers: ['6', '4','2','3'], correctAnswer: '6'}];

    //For each question in the array...
    //for(let i=0; i < questionAnswer.length; i++) {

        //Overwrites current question and answer choices depending on the question being asked
        question.innerHTML = questionAnswer[index].question;
        answerOne.innerHTML = questionAnswer[index].answers[0];
        answerTwo.innerHTML = questionAnswer[index].answers[1];
        answerThree.innerHTML = questionAnswer[index].answers[2];
        answerFour.innerHTML = questionAnswer[index].answers[3];
        
        for(let j=0; j < answerChoices.length; j++) {
                answerChoices[j].addEventListener("click", function() {
                    userChoice = answerChoices[j].innerHTML;
                    console.log(userChoice);
                    console.log(questionAnswer[index].correctAnswer);
                    answerCheck(userChoice, questionAnswer[index].correctAnswer);                   
                }
            );    
        }
        index++;
    //};

    //answerChoices[0].addEventListener("click", console.log("Hey you clicked me!"))
    
   /* answerChoices[0].addEventListener("click", function() {
        console.log("I work");
    }); */


    //Checks answer once user selects one.
    
}

buildQuiz();
console.log("working");
console.log(answerChoices); 




