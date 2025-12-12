import { useState } from "react";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { questions } from "./data";

export default function App() {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function restart() {
    setScore(0);
    setShowResult(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">

      {/* Main White Container */}
      <div className="
        w-[950px] 
        min-h-[640px] 
        bg-white 
        rounded-[32px] 
        p-12 
        shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        border border-blue-100
      ">
        {!showResult ? (
          <Quiz setScore={setScore} setShowResult={setShowResult} />
        ) : (
          <Result score={score} total={questions.length} restart={restart} />
        )}
      </div>

    </div>
  );
}
