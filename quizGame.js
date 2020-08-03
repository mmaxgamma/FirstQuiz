const quizContent = document.getElementById("quizContainer");
const question = document.getElementById("question");
let answerOne = document.getElementById("answerOne");
let answerTwo = document.getElementById("answerTwo");
let answerThree = document.getElementById("answerThree");
let answerFour = document.getElementById("answerFour");
let score = 0;

const answerCheck = (userChoice, correctChoice) => {
    if (userChoice === correctChoice) {
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
    //Should I try and split up the question numbers?
    const questionAnswer = [{question: "What's 2+2?", answers: ['0', '4', '2', '3'], correctAnswer: '4'}, 
    {question: "What's 3+3?", answers: ['6', '4','2','3'], correctAnswer: '6'}];

    for(i=0; i < questions.length; i++) {
        
    }


}



