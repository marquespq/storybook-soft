import React, { useState } from "react";
import { useId } from "react";

export interface DatePickerProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  ariaLabel?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  ariaLabel,
}) => {
  const id = useId();
  const [inputValue, setInputValue] = useState(
    value ? value.toISOString().slice(0, 10) : ""
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const date = inputValue ? new Date(inputValue) : null;
    onChange(date);
    setInputValue(inputValue);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor={id}
        aria-label={ariaLabel}
        className="text-lg font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="date"
        id={id}
        value={inputValue}
        onChange={handleInputChange}
        aria-describedby={`${id}-description`}
        className="px-4 py-2 border border-gray-300 rounded-md w-full text-lg cursor-pointer transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={(e) => e.currentTarget.showPicker()}
      />
    </div>
  );
};

export default DatePicker;
