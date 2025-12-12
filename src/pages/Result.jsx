export default function Result({ score, total, restart }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-lg bg-blue-100 text-blue-900 px-6 py-2 rounded-full mb-6">
        Keep Learning!
      </p>

      <h1 className="text-5xl font-serif text-blue-900 mb-4">
        Your Final score is
      </h1>

      <p className="text-[150px] font-bold text-blue-900 leading-none">
        {percentage}%
      </p>

      <button
        onClick={restart}
        className="mt-8 bg-blue-300 px-8 py-3 rounded-xl text-blue-900 hover:bg-blue-400 transition text-lg"
      >
        Start Again
      </button>
    </div>
  );
}
