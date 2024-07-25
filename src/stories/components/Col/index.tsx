import React from "react";

export interface ColProps {
  children: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
}

export const Col: React.FC<ColProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
}) => {
  const classes = [
    className,
    xs && `w-${xs}/12`,
    sm && `sm:w-${sm}/12`,
    md && `md:w-${md}/12`,
    lg && `lg:w-${lg}/12`,
    xl && `xl:w-${xl}/12`,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
};
