import  { useState } from "react";
import Questions from "../Questions/Questions";
import Score from "../Score/Score";

const questions = [
  { question: "How many states of matter are there", options: ["3", "5", "8"], answer: "5" },
  { question: "What is Age of universe?", options: ["Infinite", "17.8 Million Years", "13.7 Billion Years"], answer: "13.7 Billion Years" },
  { question: "What is useState?", options: ["Hook", "Component", "Tool"], answer: "Hook" }
];

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div>
      {isFinished ? (
        <Score score={score} total={questions.length} restartGame={restartGame} />
      ) : (
        <Questions
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Game;
