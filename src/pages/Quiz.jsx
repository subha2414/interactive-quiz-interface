import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { questions } from "../data";

export default function Quiz({ setScore, setShowResult }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  // Store user answers (null = unanswered)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  function next() {
    if (!selected) return;

    // Save selected answer for current question
    const updated = [...answers];
    updated[index] = selected;
    setAnswers(updated);

    // If last question → calculate score & show result
    if (index + 1 === questions.length) {
      const finalScore = updated.filter(
        (ans, i) => ans === questions[i].answer
      ).length;

      setScore(finalScore);
      setShowResult(true);
      return;
    }

    // Next question
    setIndex(index + 1);
    setSelected(updated[index + 1]); // load previous selection or null
  }

  function prev() {
    if (index === 0) return;
    setIndex(index - 1);
    setSelected(answers[index - 1]); // Load previously selected option
  }

  return (
    <div className="relative flex flex-col items-center text-center h-full w-full">

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

      {/* Question Card */}
      <QuestionCard
        q={questions[index]}
        selected={selected}
        onSelect={(opt) => setSelected(opt)}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-end w-full max-w-3xl mt-10 pr-4">
        <div className="flex gap-3">

          {/* Previous */}
          <button
            onClick={prev}
            disabled={index === 0}
            className={`
              w-12 h-12 rounded-xl flex items-center justify-center
              shadow-md transition text-xl font-bold
              ${index === 0
                ? "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800 hover:shadow-lg"
              }
            `}
          >
            ←
          </button>

          {/* Next or Submit */}
          <button
            onClick={next}
            className="
              w-12 h-12 rounded-xl flex items-center justify-center
              shadow-md transition text-xl font-bold
              bg-gradient-to-br from-blue-200 to-blue-300 
              text-blue-900 hover:shadow-lg
            "
          >
            {index + 1 === questions.length ? "✔" : "→"}
          </button>

        </div>
      </div>
    </div>
  );
}
