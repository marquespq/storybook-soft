import * as React from "react";

export interface RowProps {
  children: React.ReactNode;
  className?: string;
  gutters?: "none" | "sm" | "md" | "lg";
  ariaLabel?: string;
  ariaRole?: string;
}

export const Row: React.FC<RowProps> = ({
  children,
  className,
  gutters = "none",
  ariaLabel,
  ariaRole,
}) => {
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
    <div
      className={`flex flex-wrap ${className} ${gutterClass}`}
      aria-label={ariaLabel}
      role={ariaRole}
    >
      {children}
    </div>
  );
};
