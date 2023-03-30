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
    async function fetchTen() {
      const tenQuestions = await getTenQuizQuestions();
      const shuffledQuestions = tenQuestions.map((question) => {
        return {
          ...question,
          answers: shuffleAnswers(question),
          selectedAnswer: null
        };
      });
      setQuestions(shuffledQuestions);
    }
    fetchTen();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const userScore = questions.reduce((total, question) => {
      if (question.selectedAnswer === question.correct_answer) {
        return total + 1;
      } else {
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

  return (
    <div>
      {showResult ? (
        <p>Your score is {score} out of {questions.length}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <h3>{question.question}</h3>
              {question.answers.map((answer, answerIndex) => (
                <div key={answerIndex}>
                  <label>
                    <input
                      type="radio"
                      value={answer}
                      name={`question${questionIndex}`}
                      checked={question.selectedAnswer === answer}
                      onChange={(e) =>
                        handleAnswerChange(questionIndex, answer)
                      }
                    />
                    {answer}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Quiz;
