import React, { useState } from "react";

export interface ToggleProps {
  label: string;
  initialState?: boolean;
  onChange?: (isChecked: boolean) => void;
  disabled?: boolean;
  className?: string;
  toggleClassName?: string;
  labelClassName?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  label,
  initialState = false,
  onChange,
  disabled = false,
  className,
  toggleClassName,
  labelClassName,
}) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleClick = () => {
    if (!disabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      onChange?.(newState);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === " " || event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className={className}>
      <button
        role="switch"
        aria-checked={isChecked ? "true" : "false"}
        aria-label={label}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`${toggleClassName} flex items-center justify-between w-16 h-8 bg-gray-300 rounded-full p-1 transition duration-300 ease-in-out ${
          isChecked ? "bg-green-400" : "bg-gray-300"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span
          className={`${toggleClassName} w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${
            isChecked ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </button>
      <span className={labelClassName} aria-describedby="toggle-description">
        {label}
      </span>
      <span id="toggle-description" className="sr-only">
        Toggle switch for {label}
      </span>
    </div>
  );
};

export default Toggle;
