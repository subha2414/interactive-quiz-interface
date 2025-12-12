import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { questions } from "../data";

export default function Quiz({ setScore, setShowResult }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  function next() {
    if (!selected) return;

    if (selected === questions[index].answer)
      setScore((prev) => prev + 1);

    if (index + 1 === questions.length) {
      setShowResult(true);
      return;
    }

    setIndex(index + 1);
    setSelected(null);
  }

  function prev() {
    if (index === 0) return;
    setIndex(index - 1);
    setSelected(null);
  }

  return (
    <div className="flex flex-col items-center text-center">

      {/* Title */}
      <h1 className="text-5xl font-serif font-bold text-blue-900 mb-2">
        Test Your Knowledge
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-sm mb-8">
        Answer all questions to see your results
      </p>

      {/* Progress Bar */}
      <ProgressBar current={index + 1} total={questions.length} />

      {/* Question Block */}
      <QuestionCard
        q={questions[index]}
        selected={selected}
        onSelect={(opt) => setSelected(opt)}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-3xl mt-8">
        <button
          onClick={prev}
          disabled={index === 0}
          className={`px-4 py-2 rounded-lg text-blue-900 bg-blue-100 hover:bg-blue-200 transition 
          ${index === 0 ? "opacity-40 cursor-not-allowed" : ""}`}>
          ←
        </button>

        <button
          onClick={next}
          className="px-6 py-2 bg-blue-300 rounded-lg text-blue-900 font-medium hover:bg-blue-400 transition">
          {index + 1 === questions.length ? "Submit" : "→"}
        </button>
      </div>
    </div>
  );
}
