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
      className={
        className
          ? className
          : "w-full h-10 pl-4 pr-10 text-sm leading-5 text-gray-800 rounded-md border border-gray-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      }
      id={id}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
    />
  </div>
);
