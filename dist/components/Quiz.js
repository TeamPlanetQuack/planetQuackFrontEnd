var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from "react";
import { getTenQuizQuestions } from "../api-adapter";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const navigate = useNavigate();
    function shuffleAnswers(question) {
        const answers = [question.correct_answer, ...question.incorrect_answers];
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        return answers;
    }
    useEffect(() => {
        function fetchTen() {
            return __awaiter(this, void 0, void 0, function* () {
                const tenQuestions = yield getTenQuizQuestions();
                const shuffledQuestions = tenQuestions.map((question) => {
                    return Object.assign(Object.assign({}, question), { answers: shuffleAnswers(question), selectedAnswer: null, isCorrect: null });
                });
                setQuestions(shuffledQuestions);
            });
        }
        fetchTen();
    }, []);
    function handleSubmit(e) {
        e.preventDefault();
        const updatedQuestions = questions.map((question) => {
            if (question.selectedAnswer === question.correct_answer) {
                return Object.assign(Object.assign({}, question), { isCorrect: true });
            }
            else {
                return Object.assign(Object.assign({}, question), { isCorrect: false });
            }
        });
        setQuestions(updatedQuestions);
        const userScore = updatedQuestions.filter((question) => question.isCorrect).length;
        setScore(userScore);
        setShowResult(true);
    }
    function handleAnswerChange(questionIndex, answer) {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].selectedAnswer = answer;
        setQuestions(updatedQuestions);
    }
    function clickedBack() {
        navigate("/");
    }
    return (React.createElement("div", { id: "quizPage" },
        React.createElement("h1", null, "Solar System Quiz"),
        showResult ? (React.createElement("div", null,
            React.createElement("p", null,
                "You scored ",
                score,
                " out of 10! ",
                score >= 7 ? "Excellent job!" : null),
            questions.map((question, questionIndex) => (React.createElement("div", { key: questionIndex },
                React.createElement("p", null, question.question),
                question.answers.map((answer, answerIndex) => (React.createElement("div", { key: answerIndex },
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", value: answer, name: `question${questionIndex}`, checked: question.selectedAnswer === answer, onChange: () => handleAnswerChange(questionIndex, answer), disabled: true }),
                        answer)))),
                question.isCorrect ? (React.createElement("p", { style: { color: "green" } }, "Correct!")) : (React.createElement("p", { style: { color: "red" } },
                    "Incorrect. The correct answer was: ",
                    question.correct_answer))))))) : (React.createElement("form", { onSubmit: handleSubmit },
            questions.map((question, questionIndex) => (React.createElement("div", { key: questionIndex },
                React.createElement("p", null, question.question),
                question.answers.map((answer, answerIndex) => (React.createElement("div", { key: answerIndex },
                    React.createElement("label", null,
                        React.createElement("input", { type: "radio", value: answer, name: `question${questionIndex}`, checked: question.selectedAnswer === answer, onChange: () => handleAnswerChange(questionIndex, answer) }),
                        answer))))))),
            React.createElement("button", { id: "submitQuiz", type: "submit" }, "Submit"))),
        React.createElement("button", { className: "backToHome", onClick: clickedBack }, "\u2190 Back to The Solar System")));
};
export default Quiz;
//# sourceMappingURL=Quiz.js.map