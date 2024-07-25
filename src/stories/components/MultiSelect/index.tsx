import React, { useState } from "react";

export interface MultiSelectProps {
  options: { value: string; label: string }[];
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  values,
  onChange,
  placeholder,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    options.filter((option) => values.includes(option.value))
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: { value: string; label: string }) => {
    const newValues = [...values];
    if (newValues.includes(option.value)) {
      newValues.splice(newValues.indexOf(option.value), 1);
    } else {
      newValues.push(option.value);
    }
    onChange(newValues);
    setSelectedOptions(options.filter((opt) => newValues.includes(opt.value)));
  };

  return (
    <div className="relative">
      <div
        className={`bg-white border border-gray-300 rounded-md shadow-sm ${
          isOpen ? "rounded-b-none" : ""
        }`}
      >
        <input
          type="text"
          value={values.join(", ")}
          onChange={(e) => {}}
          placeholder={placeholder}
          className="w-full pl-3 pr-10 py-2 text-sm leading-5 text-gray-700"
          onClick={handleToggle}
          disabled={disabled}
        />
        {values.length > 0 && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-2"
            onClick={() => onChange([])}
          >
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path d="M10 10l4.292-4.293M10 10l-4.293-4.293M10 10l4.292 4.293M10 10l-4.293 4.293" />
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
              className={`text-sm leading-5 text-gray-700 hover:bg-gray-100 ${
                selectedOptions.includes(option) ? "bg-gray-100" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
