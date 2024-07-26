import React from "react";

export interface ColProps {
  /**
   * Conteúdo do componente
   */
  children: React.ReactNode;

  /**
   * Largura para tela xs
   */
  xs?: number;

  /**
   * Largura para tela sm
   */
  sm?: number;

  /**
   * Largura para tela md
   */
  md?: number;

  /**
   * Largura para tela lg
   */
  lg?: number;

  /**
   * Largura para tela xl
   */
  xl?: number;

  /**
   * Classe CSS adicional
   */
  className?: string;

  /**
   * Aria-label para leitores de tela
   */
  ariaLabel?: string;

  /**
   * Role para leitores de tela
   */
  role?: string;

  /**
   * ID do elemento para referência em outros elementos
   */
  id?: string;
}

export const Col: React.FC<ColProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  ariaLabel,
  role,
  id,
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

  return (
    <div className={classes} aria-label={ariaLabel} role={role} id={id}>
      {children}
    </div>
  );
};
