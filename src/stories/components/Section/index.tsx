import React from "react";

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export const Section = ({ title, children, ariaLabel }: SectionProps) => (
  <section
    className="p-4"
    aria-labelledby={ariaLabel ? `section-${ariaLabel}` : undefined}
  >
    <h2
      id={ariaLabel ? `section-${ariaLabel}` : undefined}
      className="text-xl font-bold mb-2"
    >
      {title}
    </h2>
    {children}
  </section>
);
