import React from "react";

const McqsOptions = ({ correctAnswer, incorrectAnswers, onAnswer }) => {
  const allOptions = [...incorrectAnswers, correctAnswer].sort(
    () => Math.random()
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {allOptions.map((option, index) => (
        <button
          key={index}
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition w-full"
          onClick={() => onAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default McqsOptions;
