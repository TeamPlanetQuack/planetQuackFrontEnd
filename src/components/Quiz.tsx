import React, { useState, useEffect } from "react";
import { getTenQuizQuestions } from "../api-adapter";

type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
  selectedAnswer: string | null;
  isCorrect: null | boolean;
};

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  function shuffleAnswers(question: Question): string[] {
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
      const shuffledQuestions = tenQuestions.map((question: any) => {
        return {
          ...question,
          answers: shuffleAnswers(question),
          selectedAnswer: null,
          isCorrect: null,
        };
      });
      setQuestions(shuffledQuestions);
    }
    fetchTen();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const updatedQuestions = questions.map((question) => {
      if (question.selectedAnswer === question.correct_answer) {
        return {
          ...question,
          isCorrect: true,
        };
      } else {
        return {
          ...question,
          isCorrect: false,
        };
      }
    });

    setQuestions(updatedQuestions);
    const userScore = updatedQuestions.filter(
      (question) => question.isCorrect
    ).length;

    setScore(userScore);
    setShowResult(true);
  }

  function handleAnswerChange(questionIndex: number, answer: string): void {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedAnswer = answer;
    setQuestions(updatedQuestions);
  }

  return (
    <div>
      {showResult ? (
        <div>
          <p>You scored {score} out of 10!</p>
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
                      onChange={() =>
                        handleAnswerChange(questionIndex, answer)
                      }
                      disabled
                    />
                    {answer}
                  </label>
                </div>
              ))}
              {question.isCorrect ? (
                <p style={{ color: "green" }}>Correct!</p>
              ) : (
                <p style={{ color: "red" }}>
                  Incorrect. The correct answer was: {question.correct_answer}
                </p>
              )}
            </div>
          ))}
        </div>
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
                      onChange={() =>
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
