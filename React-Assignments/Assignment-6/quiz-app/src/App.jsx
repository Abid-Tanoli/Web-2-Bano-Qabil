import { useState } from "react";
import McqsOptions from "./Components/McqsOptions.jsx";

export default function App() {
  const [mcqs, setMcqs] = useState([]);
  const [quizStart, setQuizStart] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [warning, setWarning] = useState("");

  async function getQuizQuestions() {
    if (!category && !number) {
      setWarning("⚠️ Please select both category and number of questions!");
      return;
    }
    if (!category) {
      setWarning("⚠️ Please select category");
      return;
    }
    if (!number) {
      setWarning("⚠️ Please select number of questions!");
      return;
    }

    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=${number}&category=${category}&type=multiple`
      );
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setWarning("⚠️ Could not fetch questions. Try again later.");
        return;
      }

      setMcqs(data.results);
      setQuizStart(true);
      setCurrentQuestionIndex(0);
      setScore(0);
      setShowResult(false);
      setUserAnswers([]);
      setWarning("");
    } catch (err) {
      setWarning("⚠️ Failed to fetch quiz. Please check internet connection.");
    }
  }

  function handleAnswer(selectedAnswer) {
    const currentQuestion = mcqs[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;

    if (isCorrect) setScore((prev) => prev + 1);

    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: selectedAnswer,
        correct: currentQuestion.correct_answer,
      },
    ]);

    const next = currentQuestionIndex + 1;
    if (next < mcqs.length) {
      setCurrentQuestionIndex(next);
    } else {
      setShowResult(true);
    }
  }

  function getResultStatus() {
    const percentage = ((score / mcqs.length) * 100).toFixed(1);
    const pass = percentage >= 40;

    return (
      <div className="flex flex-col items-center space-y-4">
        <p className="text-xl font-bold">
          {pass ? "✅ Pass" : "❌ Fail"} ({percentage}%)
        </p>

        {pass ? (
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src="./200.gif"
              alt="Pass gif"
              className="w-40 sm:w-52 rounded-xl shadow-lg"
            />
            <img
              src="charles-charlesthefrench.gif"
              alt="Funny pass gif"
              className="w-40 sm:w-52 rounded-xl shadow-lg"
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src="./oops-chelsea-boudreau.gif"
              alt="Oops fail"
              className="w-40 sm:w-52 rounded-xl shadow-lg"
            />
            <img
              src="./you-failed-bernie.gif"
              alt="Fail gif"
              className="w-40 sm:w-52 rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-violet-900 via-blue-200 to-indigo-600 text-white p-4">
      {!quizStart ? (
        <div className="w-full max-w-lg bg-gradient-to-r from-violet-950 via-blue-800 to-indigo-600 backdrop-blur-md rounded-2xl p-6 shadow-xl text-center space-y-6">
          <h1 className="text-6xl font-extrabold"> Quiz App</h1>

          <div className="flex flex-col items-start space-y-2">
            <label className="font-semibold text-white">Select Category:</label>
            <select
              className="w-full px-3 py-2 rounded-lg bg-white text-black"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setWarning("");
              }}
            >
              <option value="">--Choose--</option>
              <option value="9">General Knowledge</option>
              <option value="21">Sports</option>
              <option value="23">History</option>
              <option value="18">Science: Computers</option>
            </select>
          </div>

          <div className="flex flex-col items-start space-y-2">
            <label className="font-semibold text-white">
              Number of Questions:
            </label>
            <select
              className="w-full px-3 py-2 rounded-lg bg-white text-black"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
                setWarning("");
              }}
            >
              <option value="">--Choose--</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          <button
            className="w-full bg-green-600 text-white font-extrabold text-2xl px-4 py-2 rounded-lg hover:bg-green-700 transition"
            onClick={getQuizQuestions}
          >
            Start Quiz
          </button>

          {warning && (
            <p className="text-red-500 font-bold text-3xl">{warning}</p>
          )}
        </div>
      ) : !showResult ? (
        <div className="w-full max-w-2xl bg-white text-black p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-4">
            Question {currentQuestionIndex + 1} / {mcqs.length}
          </h2>
          <p className="mb-4">{mcqs[currentQuestionIndex].question}</p>

          <McqsOptions
            correctAnswer={mcqs[currentQuestionIndex].correct_answer}
            incorrectAnswers={mcqs[currentQuestionIndex].incorrect_answers}
            onAnswer={handleAnswer}
          />
        </div>
      ) : (
        <div className="w-full max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold">🏆 Quiz Finished!</h2>
          <p className="text-lg">
            Your Score: {score} / {mcqs.length}
          </p>

          {getResultStatus()}

          <div className="bg-white text-black rounded-2xl shadow-xl p-6 text-left">
            <h3 className="text-xl font-bold mb-4">Review</h3>
            {userAnswers.map((ans, idx) => (
              <div key={idx} className="mb-3 p-3 border-b last:border-none">
                <p className="font-semibold">
                  {idx + 1}. {ans.question}
                </p>
                <p>
                  Your Answer:{" "}
                  <span
                    className={
                      ans.selected === ans.correct
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {ans.selected}
                  </span>
                </p>
                {ans.selected !== ans.correct && (
                  <p className="text-green-600">
                    Correct Answer: {ans.correct}
                  </p>
                )}
              </div>
            ))}
          </div>

          <button
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition text-white font-bold"
            onClick={() => {
              setShowResult(false);
              setUserAnswers([]);
              setCategory("");
              setNumber("");
              setQuizStart(false);
            }}
          >
            🔄 Play Again
          </button>
        </div>
      )}
    </div>
  );
}
