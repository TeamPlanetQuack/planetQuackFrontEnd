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
const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
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
                    return Object.assign(Object.assign({}, question), { answers: shuffleAnswers(question), selectedAnswer: null });
                });
                setQuestions(shuffledQuestions);
            });
        }
        fetchTen();
    }, []);
    function handleSubmit(e) {
        e.preventDefault();
        const userScore = questions.reduce((total, question) => {
            if (question.selectedAnswer === question.correct_answer) {
                return total + 1;
            }
            else {
                return total;
            }
        }, 0);
        setScore(userScore);
        setShowResult(true);
    }
    function handleAnswerChange(questionIndex, answer) {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].selectedAnswer = answer;
        setQuestions(updatedQuestions);
    }
    return (React.createElement("div", null, showResult ? (React.createElement("p", null,
        "You scored ",
        score,
        " out of 10!")
    // {score>7 ? <h2>Great Job!</h2> : <h2>Good Effort, keep studying!</h2>}
    ) : (React.createElement("form", { onSubmit: handleSubmit },
        questions.map((question, questionIndex) => (React.createElement("div", { key: questionIndex },
            React.createElement("h3", null, question.question),
            question.answers.map((answer, answerIndex) => (React.createElement("div", { key: answerIndex },
                React.createElement("label", null,
                    React.createElement("input", { type: "radio", value: answer, name: `question${questionIndex}`, checked: question.selectedAnswer === answer, onChange: () => handleAnswerChange(questionIndex, answer) }),
                    answer))))))),
        React.createElement("button", { type: "submit" }, "Submit")))));
};
export default Quiz;
//# sourceMappingURL=Quiz.js.map