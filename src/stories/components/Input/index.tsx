import * as React from "react";

export interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  id: string;
  label: string;
  ariaLabel?: string;
  ariaDescribedby?: string;
  className?: string;
  labelClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  id,
  label,
  ariaLabel,
  ariaDescribedby,
  className,
  labelClassName,
}) => (
  <div>
    <label htmlFor={id} className={labelClassName}>
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className ? className : "block text-gray-700 text-sm  mb-2"}
      id={id}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
    />
  </div>
);
