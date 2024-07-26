import React from "react";

export interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  id?: string;
  ariaLabel?: string;
  ariaDescribedby?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  id,
  ariaLabel,
  ariaDescribedby,
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border border-gray-300 p-2 rounded"
    id={id}
    aria-label={ariaLabel}
    aria-describedby={ariaDescribedby}
  />
);
