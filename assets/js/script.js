const questions = [
    {
        question: 'Why did the scarecrow become a successful motivational speaker?',
        answers: [
            { text: 'Because he had a great "stalk" record.', correct: false },
            { text: 'Because he was outstanding in his field.', correct: true },
            { text: 'Because he could always "cornvince" his audience.', correct: false },
        ]
    },
    {
        question: 'What did one plate say to another plate?',
        answers: [
            { text: "Let's dish out some jokes!", correct: false },
            { text: "Tonight, dinner's on me!", correct: true },
            { text: "We make a great pair!", correct: false },
        ]
    },
    {
        question: "Why did the computer catch a cold?",
        answers: [
            { text: "It didn't have antivirus software.", correct: false },
            { text: 'Because it had too many "bytes."', correct: true },
            { text: 'It spent too much time on the web.', correct: false },
        ]
    },
    {
        question: "How do you organize a space party?",
        answers: [
            { text: "Planet a lot of fun activities.", correct: false },
            { text: 'You planet.', correct: true },
            { text: 'Launch a dance floor in zero gravity.', correct: false },
        ]
    },
    {
        question: "What's a vampire's favourite fruit?",
        answers: [
            { text: 'Blood orange!', correct: true },
            { text: 'Cryptocurrency.', correct: false },
            { text: 'Fangtastic grapes.', correct: false },
        ]
    },
    {
        question: "Why don't scientists trust atoms?",
        answers: [
            { text: "Because they're too small.", correct: false },
            { text: 'Because they make up everything!', correct: true },
            { text: "Because they're always bonding with others.", correct: false },

        ]
    },
    {
        question: "How does a penguin build its house?",
        answers: [
            { text: "By stacking ice cubes.", correct: false },
            { text: "With igloo construction workers.", correct: false },
            { text: "Igloos it together!", correct: true },

        ]
    },
    {
        question: "Why did the math book look sad?",
        answers: [
            { text: "Because it had too many problems.", correct: true },
            { text: "Because it was missing its cover.", correct: false },
            { text: "Because it couldn't count on anyone.", correct: false },
        ]
    },
    {

        question: "How does a snowman get around?",
        answers: [
            { text: "By rolling on a snowy treadmill.", correct: false },
            { text: "With snowshoes.", correct: false },
            { text: 'By riding an "icicle"!', correct: true },
        ]
    },
    {
        question: "What did one hat say to the other?",
        answers: [
            { text: "You're a head of the game.", correct: false },
            { text: "Stay here, I'm going on ahead!", correct: true },
            { text: "I'm on top of things.", correct: false },
        ]
    }
];

//Hiding the first page and showing the quiz page

function redirectToQuiz() {

    const quizContainer = document.getElementById('quiz-container');
    const welcomeBox = document.getElementById('welcome-box');

    welcomeBox.style.display = 'none';
    quizContainer.style.display = 'block';
    quizContainer.scrollIntoView({ behavior: 'smooth' });
}

// Start quiz function
const questionText = document.getElementById('question');
const answerChoices = document.getElementById('answer-choices');
const nextButton = document.getElementById('next');

const questionNumberDisplay = document.getElementById('question-number');
const scoreDisplay = document.getElementById('score');
let questionCounterDisplay = 0;
let score = 0;

function beginQuiz() {
    questionCounter = 0;
    score = 0;
    nextButton.innerHTML = 'Next Question';
    displayQuestion();
    updateScoreDisplay();
}

// Function for showing the questions

function displayQuestion() {
    resetQuestions();
    let currentQuestion = questions[questionCounter];
    let questionNo = questionCounter + 1;
    let totalQuestions = questions.length;

    questionNumberDisplay.innerText = `${questionNo}/${totalQuestions}`;
    questionText.innerText = currentQuestion.question;

    // Display the answer

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('choices');
        answerChoices.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectChoice); // add click function to the choices
    });
};

//Function for displaying the score when questions are over;
function displayScore() {
    resetQuestions();
    displayScoreMessage(score);
    nextButton.innerHTML = "Let's Play Again";
    nextButton.style.display = 'block';
}

// Function for hiding the question and choices from html and replacing them 
function resetQuestions() {
    nextButton.style.display = 'none';
    while (answerChoices.firstChild) {
        answerChoices.removeChild(answerChoices.firstChild);
    }
}

// Function for displaying selected choices
function selectChoice (e) {
    const selectedAnswer = e.target;
    const itsTrue = selectedAnswer.dataset.correct === 'true';
    if (itsTrue) {
        selectedAnswer.classList.add('correct');
        score += 10;
        updateScoreDisplay();
    }else{
        selectedAnswer.classList.add('incorrect');
    }
    Array.from(answerChoices.children).forEach(button => {
        if(button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

// Function for displaying the score and the question number on the head
function updateScoreDisplay() {
    scoreDisplay.innerText = `${score}%`;
}

//Function for displaying score messages 
function displayScoreMessage(score) {
    let scoreMessage = "";

    if (score === 100) {
        scoreMessage = `Wowza! You scored ${score}%. You're a Humor Superhero, soaring above the comedy cosmos with your impeccable wit. Time to update your resume: Chief Executive Jokester!`;
    } else if (score >= 90) {
        scoreMessage = `Congratulations! You scored ${score}%. You're officially certified as a Humor Hero. Move over, stand-up comedians – there's a new laughter legend in town!`;
    } else if (score >= 70) {
        scoreMessage = `Great job! You've earned the title of Chuckle Champion by scoring ${score}%. Your friends might not roll on the floor, but they'll definitely crack a smile in your comedic presence.`;
    } else if (score >= 50) {
        scoreMessage = `You scored ${score}%, not bad! You're a Jest Journeyer. You might not be headlining comedy clubs, but you're definitely on the path to becoming a comedic maestro.`;
    } else {
        scoreMessage = `Oops, it seems your funny bone needs a bit of exercise. Fear not! With a little more wit and whimsy, you'll be a Humor Hero in no time. Keep those dad jokes coming!`;
    }

    questionText.innerHTML = scoreMessage;
    if (questionCounter >= questions.length) {
        document.getElementById('head-display').style.display = 'none';
    } else {
        document.getElementById('head-display').style.display = 'flex';
    }
}

// Function for showing the next question after selecting a choice

function handleNextQuestion() {
    questionCounter++;
    if (questionCounter < questions.length) {
        displayQuestion();
    }else{
        displayScore();
    }
}

//Function for the next button
nextButton.addEventListener('click', () => {
    if (questionCounter < questions.length) {
        handleNextQuestion();
    }else{
        beginQuiz();
    }
});

beginQuiz();


