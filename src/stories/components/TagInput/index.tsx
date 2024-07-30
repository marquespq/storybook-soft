import React, { useState } from "react";

export interface TagInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  maxTags?: number;
  className?: string;
  classNameTags?: string;
  ariaLabel?: string;
  ariaDescribedby?: string;
}

export const TagInput: React.FC<TagInputProps> = ({
  value,
  onChange,
  placeholder = "Adicione uma tag",
  maxTags = 10,
  className,
  classNameTags,
  ariaLabel,
  ariaDescribedby,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      addTag(inputValue.trim());
      setInputValue("");
    }
  };

  const addTag = (tag: string) => {
    if (tags.length < maxTags) {
      setTags([...tags, tag]);
      onChange([...tags, tag]);
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
    onChange(tags.filter((_, i) => i !== index));
  };

  return (
    <div
      className="flex flex-wrap mb-4"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
    >
      {tags.map((tag, index) => (
        <div
          key={index}
          className={`bg-gray-200 rounded px-2 py-1 mr-2 mb-2 ${classNameTags}`}
          role="listitem"
        >
          <span>{tag}</span>
          <button
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            onClick={() => removeTag(index)}
            aria-label={`Remove tag ${tag}`}
          >
            ×
          </button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`w-full h-10 pl-4 pr-10 text-sm leading-5 text-gray-800 rounded-md border border-gray-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        aria-autocomplete="list"
        aria-controls="tag-list"
      />
      <ul
        id="tag-list"
        className="hidden"
        aria-live="polite"
        aria-relevant="additions"
      >
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default TagInput;
