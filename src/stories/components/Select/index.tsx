import React, { useState } from "react";

export interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  isClearable?: boolean;
  title?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  isClearable,
  title,
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
      <span>{title}</span>
      <div
        className={`bg-white border border-gray-300 rounded-md shadow-sm ${
          isOpen ? "rounded-b-none" : ""
        }`}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-3 pr-10 py-2 text-sm leading-5 text-gray-700"
          onClick={handleToggle}
          disabled={disabled}
        />
        {isClearable && value && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-2"
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
          className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-md shadow-sm"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className="text-sm leading-5 text-gray-700 hover:bg-gray-100"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
