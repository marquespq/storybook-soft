import React from "react";

export interface ToastProps {
  message: string;
  type: "success" | "warning" | "error";
  onClose: () => void;
  align: "left" | "center" | "right";
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  onClose,
  align,
}) => {
  return (
    <div
      className={`fixed top-0 ${align === "left" ? "left-0" : align === "center" ? "left-1/2 transform -translate-x-1/2" : "right-0"} p-4 mb-4 text-sm font-bold ${
        type === "success"
          ? "bg-green-100 text-green-700"
          : type === "warning"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700"
      } rounded shadow-md `}
    >
      <span className="flex justify-center p-2">{message}</span>
      <button
        className={`absolute top-1 right-1 ${
          type === "success"
            ? "bg-green-100 text-green-700"
            : type === "warning"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
        }  hover:text-gray-900 transition duration-300 ease-in-out mb-2 rounded`}
        onClick={onClose}
      >
        x
      </button>
    </div>
  );
};

export default Toast;
