import React, { useState } from "react";

export interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  isClearable?: boolean;
  label?: string;
  ariaLabel?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  isClearable,
  label,
  ariaLabel,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="relative">
      <label>{label}</label>
      <div
        className={`bg-white border border-gray-300 rounded-md shadow-sm ${
          isOpen ? "rounded-b-none" : ""
        }`}
        role="combobox"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={
            className
              ? className
              : "w-full h-10 pl-4 pr-10 text-sm leading-5 text-gray-800 rounded-md border border-gray-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          }
          onClick={handleToggle}
          disabled={disabled}
          aria-autocomplete="list"
          aria-activedescendant={isOpen ? options[0].value : undefined}
        />
        {isClearable && value && (
          <button
            type="button"
            className={`absolute inset-y-0 right-0 flex items-center pr-2 ${label && "pt-6"}`}
            onClick={handleClear}
          >
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path d="M10 10l4.292-4.293M10 10l-4.293-4.293M10 10l4.293 4.293M10 10l-4.293 4.293" />
            </svg>
          </button>
        )}
      </div>
      {isOpen && (
        <ul
          className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-md shadow-sm py-2 overflow-y-auto max-h-48"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className="text-sm leading-5 text-gray-700 py-2 px-4 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
              onClick={() => handleOptionClick(option.value)}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
