import { useState } from "react";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { questions } from "./data";

// import images
import goodluck from "./assets/goodluck.png";
import paw from "./assets/paw.png";

export default function App() {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function restart() {
    setScore(0);
    setShowResult(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#cce7ff] via-[#b5e1f0] to-[#7fc9e8]">

      {/* 🌟 OUTER FRAME */}
      <div className="
        w-[1400px]
        min-h-[820px]
        bg-white/60
        backdrop-blur-[6px]
        rounded-[45px]
        border border-white/40
        shadow-[0px_20px_40px_rgba(0,0,0,0.15)]
        p-10
        flex items-center justify-center
      ">

        {/* 🌟 INNER WHITE CARD */}
        <div className="
          relative
          w-[1200px]
          min-h-[680px]
          bg-white
          rounded-[35px]
          shadow-[0px_10px_30px_rgba(0,0,0,0.12)]
          p-12
        ">

          {/* ⭐ SHOW IMAGES ONLY ON QUESTION 1 (inside white card) */}
          {!showResult && (
            <>
              {/* Good Luck bubble */}
              <img
                src={goodluck}
                alt="Good Luck"
                className="
                  absolute
                  left-6
                  bottom-40
                  w-36
                  z-30
                "
              />

              {/* Paw image */}
              <img
                src={paw}
                alt="Paw"
                className="
                  absolute
                  left-10
                  bottom-10
                  w-32
                  z-30
                "
              />
            </>
          )}

          {/* CONTENT */}
          {!showResult ? (
            <Quiz setScore={setScore} setShowResult={setShowResult} />
          ) : (
            <Result score={score} total={questions.length} restart={restart} />
          )}
        </div>
      </div>
    </div>
  );
}
