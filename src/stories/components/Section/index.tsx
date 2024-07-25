import React from "react";

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => (
  <section className="p-4">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </section>
);
