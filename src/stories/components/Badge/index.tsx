import React from "react";

export interface BadgeProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: number | string;
  padding?: number | string;
  borderRadius?: number | string;
  className?: string;
  ariaLabel?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  color = "#fff",
  backgroundColor = "#337ab7",
  fontSize = "12px",
  padding = "4px 8px",
  borderRadius = "10px",
  className,
  ariaLabel,
}) => {
  return (
    <span
      style={{
        color,
        backgroundColor,
        fontSize,
        padding,
        borderRadius,
      }}
      aria-label={ariaLabel}
      className={className}
    >
      {text}
    </span>
  );
};

export default Badge;
