export default function QuestionCard({ q, selected, onSelect }) {
  return (
    <div className="w-full max-w-3xl">

      {/* Question Box */}
      <div className="bg-blue-100 text-center py-4 rounded-lg border border-blue-300 text-lg font-semibold text-blue-900">
        {q.id}. {q.question}
      </div>

      {/* Options */}
      <div className="mt-6 space-y-4 flex flex-col items-center">
        {q.options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`w-full max-w-2xl py-3 rounded-lg border text-lg text-center transition-all duration-200
              ${
                selected === opt
                  ? "bg-blue-200 border-blue-600 text-blue-900 shadow-sm"
                  : "bg-white hover:bg-blue-50 border-blue-300"
              }
            `}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
