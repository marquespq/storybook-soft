import React from "react";

export interface MessageProps {
  type: "success" | "warning" | "error";
  message: string;
  className?: string;
  ariaLabel?: string;
}

export const Message: React.FC<MessageProps> = ({
  type,
  message,
  className,
  ariaLabel,
}) => {
  return (
    <div
      className={`p-4 rounded ${
        type === "success"
          ? "bg-green-200 text-green-700"
          : type === "warning"
            ? "bg-yellow-200 text-yellow-700"
            : "bg-red-200 text-red-700"
      } ${className}`}
      aria-label={ariaLabel}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Message;
