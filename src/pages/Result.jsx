export default function Result({ score, total, restart }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="text-center mt-20">

      <button className="bg-blue-100 px-6 py-1 rounded-full text-gray-700 mb-6">
        Keep Learning!
      </button>

      <h2 className="text-4xl font-serif text-blue-900 mb-4">
        Your Final score is
      </h2>

      <div className="text-[120px] font-serif text-blue-900 leading-none">
        {percentage}%
      </div>

      <button
        onClick={restart}
        className="mt-10 bg-blue-300 px-8 py-3 rounded-lg hover:bg-blue-400 text-lg"
      >
        Start Again
      </button>
    </div>
  );
}
