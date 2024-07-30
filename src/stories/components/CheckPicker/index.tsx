import React, { useState } from "react";

export interface CheckPickerProps {
  options: { value: string; label: string }[];
  value: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
}

export const CheckPicker: React.FC<CheckPickerProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSelect = (option: { value: string; label: string }) => {
    const newValue = [...value, option.value];
    onChange(newValue);
  };

  const handleDeselect = (option: { value: string; label: string }) => {
    const newValue = value.filter((val) => val !== option.value);
    onChange(newValue);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`relative ${className} max-w-md`}>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-md"
        onClick={handleToggle}
      >
        {value.length > 0
          ? value
              .map((val) => {
                const option = options.find((opt) => opt.value === val);
                return option ? option.label : val;
              })
              .join(", ")
          : placeholder}
        <span className="caret ml-2 text-gray-600" />
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 w-auto bg-white border border-gray-400 rounded shadow-md"
          style={{ top: "100%", left: 0 }}
        >
          <li>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full py-2 px-4 text-gray-700"
            />
          </li>
          {filteredOptions.map((option) => (
            <li key={option.value}>
              <label className="flex items-center py-2 px-4 text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={value.includes(option.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleSelect(option);
                    } else {
                      handleDeselect(option);
                    }
                  }}
                />
                <span className="ml-2">{option.label}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CheckPicker.defaultProps = {
  placeholder: "Select options",
};

export default CheckPicker;
