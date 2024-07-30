import React, { useRef } from "react";

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size: "sm" | "md" | "lg";
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen,
  onClose,
  size,
  footer,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  let maxWidthClass = "";
  switch (size) {
    case "sm":
      maxWidthClass = "max-w-sm";
      break;
    case "md":
      maxWidthClass = "max-w-md";
      break;
    case "lg":
      maxWidthClass = "max-w-lg";
      break;
    default:
      maxWidthClass = "max-w-md";
  }

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      modalRef.current?.focus();
    } else {
      onClose();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50"
        aria-hidden="true"
        onClick={handleOutsideClick}
      />
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className={`mx-auto p-4 ${maxWidthClass}`}>
          <div
            ref={modalRef}
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            role="document"
            tabIndex={-1}
          >
            <button
              className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600 transition duration-300 ease-in-out"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-4">
              <h3 id="modal-title" className="text-3xl font-semibold">
                {title}
              </h3>
              <div id="modal-description">{children}</div>
              {footer && (
                <div className="modal-footer">
                  <hr className="border-gray-200" />
                  {footer}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
