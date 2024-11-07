const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample questions data
const questions = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        id: 3,
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: "Blue Whale"
    }
    // Add more questions here
];

// Endpoint to get questions
app.get('/api/questions', (req, res) => {
    res.json(questions);
});

// Endpoint to check answers
app.post('/api/submit', (req, res) => {
    const { answers } = req.body; // Expecting answers as an array
    let score = 0;

    answers.forEach((userAnswer, index) => {
        if (userAnswer === questions[index].answer) {
            score += 1;
        }
    });

    res.json({ score, total: questions.length });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
