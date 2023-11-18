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

// Start quiz function

const questionText = document.getElementById('question');
const answerChoices = document.getElementById('answer-choices');
const nextButton = document.getElementById('next');

let questionCounter = 0;
let score = 0;

function beginQuiz() {
    questionCounter = 0;
    score = 0;
    nextButton.innerHTML = 'Next Question';
    displayQuestion();
}

// Function for showing the questions

function displayQuestion() {
    resetQuestions();
    let currentQuestion = questions[questionCounter];
    let questionNo = questionCounter + 1;
    questionText.innerHTML = questionNo + ") " + currentQuestion.question;

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
        score++;
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


beginQuiz();


