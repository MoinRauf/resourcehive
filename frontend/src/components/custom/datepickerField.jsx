export default function DatePickerField({ label, error }) {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="text-sm/6 font-semibold text-slate-900">{label}</div>
      </div>
      <h1>date picker field</h1>
      <div className="mt-1 min-h-4 flex items-center">
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
}
