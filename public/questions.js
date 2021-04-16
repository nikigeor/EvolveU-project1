console.log("Hello World!");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounter2 = document.getElementById("questionCounter");
const score2 = document.getElementById("score");

// let progressText = document.getElementById('progressText');
let scoreBoard = document.getElementById('score');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the largest country in South America?",
        choice1: "Argentina",
        choice2: "Brazil",
        choice3: "Colombia",
        choice4: "Bolivia",
        answer: 2
    },
    {
        question: "What is the capital city of Australia?",
        choice1: "Sydney",
        choice2: "Brisbane",
        choice3: "Canberra",
        choice4: "Melbourne",
        answer: 3
    },
    {
        question: "Which country is famous for its spice trade?",
        choice1: "Mexico",
        choice2: "Thailand",
        choice3: "Turkey",
        choice4: "India",
        answer: 4
    }
]


//constants
const correctAns = 1;
const maxQues = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

//questions

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= maxQues) {
        return window.location.assign("/finish.html");
    }

    questionCounter++;
    questionCounter2.innerText = questionCounter + "/" + maxQues;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //answers
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        

        let classToApply = 'incorrect';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
            console.log(classToApply);
        }

        if (classToApply === "correct") {
            incrementScore(correctAns);
        }
        
      selectedChoice.parentElement.classList.add(classToApply);

      setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);

    });
});

incrementScore = num => {
    score += num;
    score2.innerText = score;
};


startGame();
