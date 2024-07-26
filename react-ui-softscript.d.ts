declare module "react-ui-softscript" {
  import * as React from "react";

  export interface ButtonProps {
    variant?: "primary" | "secondary" | "success" | "danger";
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
    ariaLabel?: string;
    title?: string;
    tabIndex?: number;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  }

  export const Button: React.FC<ButtonProps>;
}
