export interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "danger";

  size?: "small" | "medium" | "large";

  label: string;

  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: "text-sm py-2 px-4",
    medium: "text-base py-2.5 px-5",
    large: "text-lg py-3 px-6",
  };

  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    success: "bg-green-400 hover:bg-green-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  return (
    <button
      type="button"
      className={`font-sans font-bold rounded-md cursor-pointer inline-block ${sizeClasses[size]} ${variantClasses[variant]}`}
      {...props}
    >
      {label}
    </button>
  );
};
