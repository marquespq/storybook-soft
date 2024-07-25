import React from "react";

export interface RowProps {
  children: React.ReactNode;
  className?: string;
  gutters?: "none" | "sm" | "md" | "lg";
}

const Row: React.FC<RowProps> = ({ children, className, gutters = "none" }) => {
  let gutterClass = "";
  switch (gutters) {
    case "sm":
      gutterClass = "gx-2";
      break;
    case "md":
      gutterClass = "gx-4";
      break;
    case "lg":
      gutterClass = "gx-8";
      break;
    default:
      gutterClass = "";
  }

  return (
    <div className={`flex flex-wrap ${className} ${gutterClass}`}>
      {children}
    </div>
  );
};

export default Row;
