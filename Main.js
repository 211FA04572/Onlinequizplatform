// Questions and answers array
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["CO2", "H2O", "O2", "N2"],
        correct: 1
    },
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "Germany", "Argentina", "France"],
        correct: 3
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1905", "1912", "1915", "1920"],
        correct: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correct: 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Great White Shark", "Polar Bear"],
        correct: 1
    },
    {
        question: "Which element is found in abundance in the sun?",
        options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        correct: 1
    },
    {
        question: "Which country is the largest by area?",
        options: ["Canada", "China", "United States", "Russia"],
        correct: 3
    }
];

// Quiz rendering
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// Display quiz
function loadQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
        const options = [];
        currentQuestion.options.forEach((option, index) => {
            options.push(
                `<li><label><input type="radio" name="question${questionNumber}" value="${index}"> ${option}</label></li>`
            );
        });
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <ul class="options">${options.join('')}</ul>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

// Show results
function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".options");
    let score = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selectedOption = answerContainer.querySelector("input[name=question" + questionNumber + "]:checked");

        if (selectedOption && parseInt(selectedOption.value) === currentQuestion.correct) {
            score++;
        }
    });

    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}.`;
}

// Event listeners
submitButton.addEventListener("click", showResults);

// Load the quiz when the page loads
loadQuiz();
