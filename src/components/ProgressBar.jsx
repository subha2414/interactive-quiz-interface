export default function ProgressBar({ current, total }) {
  return (
    <div className="flex gap-3 w-full max-w-3xl mb-10">
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`h-[6px] flex-1 rounded-full transition-all duration-300 
          ${i < current ? "bg-blue-900" : "bg-gray-300"}`}
        />
      ))}
    </div>
  );
}
