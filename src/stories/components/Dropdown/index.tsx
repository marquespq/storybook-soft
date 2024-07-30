import React, { useState } from "react";

export interface DropdownProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSelect = (option: { value: string; label: string }) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-md flex justify-between"
        onClick={handleToggle}
      >
        {value
          ? options.find((option) => option.value === value)?.label
          : placeholder}
        <span
          className={`caret ml-2 text-gray-600 ${isOpen ? "" : "rotate-180"} mt-2`}
        >
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 0L10 6H0L5 0Z" fill="#9CA3AF" fillRule="evenodd" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 w-auto bg-white border border-gray-400 rounded shadow-md"
          style={{ top: "100%", left: 0 }}
        >
          {options.map((option) => (
            <li key={option.value}>
              <a
                className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  placeholder: "Select an option",
};

export default Dropdown;
