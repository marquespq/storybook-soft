export interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  id: string;
  label: string;
  ariaLabel?: string;
  ariaDescribedby?: string;
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
}) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
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
  </div>
);
