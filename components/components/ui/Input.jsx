"use client";

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  textarea = false,
  className = "",
}) {
  return (
    <label className="block text-slate-700 dark:text-slate-300 mb-4">
      {label && <span className="block mb-2 font-medium">{label}</span>}
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input ${className}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input ${className}`}
        />
      )}
    </label>
  );
}
