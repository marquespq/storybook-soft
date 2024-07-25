// Input.tsx
import React from "react";

export interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border border-gray-300 p-2 rounded"
  />
);
export default Input;
