import React from "react";

export default function Input({
  name,
  placeholder,
  register,
  type,
  label,
  errorMessage,
  value,
  onChange, readOnly,
  options, // Added for select options
}) {
  return (
    <div className="flex flex-col w-full mb-3">
      <label
        htmlFor={name}
        className="block text-md font-medium leading-6 text-gray-900 mb-1"
      >
        {label}
      </label>
      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={readOnly}
          className="border border-gray-300 h-14 w-full pl-4 rounded-2xl p-2 focus:outline-none focus:border-Teal focus:ring-Teal"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          required={false}
          {...register}
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          readOnly={readOnly}
          className={`border-2 border-transparent gray-300 h-12 font-semibold font-poppins w-full pl-4 rounded-xl bg-[#E7E7E7] p-2 focus:bg-white focus:outline-none focus:border-black focus:ring-black invalid:border-red-500 invalid:text-red-500 peer`}
        />
      )}
      <p className="text-red-500 mt-1">{errorMessage}</p>
    </div>
  );
}
