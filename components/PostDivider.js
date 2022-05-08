export default function PostDivider() {
  return <div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
    </div>
    <div className="relative flex justify-center">
      <span
        className="px-3 bg-white text-3xl font-extrabold text-gray-900">Answers</span>
    </div>
  </div>;
}
