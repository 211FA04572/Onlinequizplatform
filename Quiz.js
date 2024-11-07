import React, { useState } from 'react';

function Quiz() {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Who wrote 'Hamlet'?",
            options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Leo Tolstoy"],
            answer: "William Shakespeare"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: "Pacific"
        },
        {
            question: "In what year did the Titanic sink?",
            options: ["1912", "1918", "1925", "1930"],
            answer: "1912"
        }
    ];

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz">
            <h2>General Knowledge Quiz</h2>
            {showScore ? (
                <div>
                    <h3>Your Score: {score} / {questions.length}</h3>
                </div>
            ) : (
                <div>
                    <div className="question-section">
                        <h4>{questions[currentQuestion].question}</h4>
                    </div>
                    <div className="options-section">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className="option-btn"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quiz;
