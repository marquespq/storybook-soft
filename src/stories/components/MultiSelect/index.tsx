import React, { useEffect, useState } from "react";

export interface MultiSelectProps {
  options: { value: string; label: string }[];
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  ariaLabel?: string;
  ariaDescribedby?: string;
  className?: string;
  labelClassName?: string;
  label: string;
  id: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  values,
  onChange,
  placeholder,
  disabled,
  ariaLabel,
  ariaDescribedby,
  className,
  labelClassName,
  label,
  id,
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

  const handleClickOutside = (event: any) => {
    if (!event.target.closest(".select")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="select relative">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
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
          className={className}
          onClick={handleToggle}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
        />
        {values.length > 0 && (
          <button
            type="button"
            className={`absolute inset-y-0 right-0 flex items-center pr-2 ${label && "pt-6"}`}
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
          aria-multiselectable="true"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`text-sm leading-5 text-gray-700 hover:bg-gray-100 ${
                selectedOptions.includes(option) ? "bg-gray-100" : ""
              }`}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={
                selectedOptions.includes(option) ? "true" : "false"
              }
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
