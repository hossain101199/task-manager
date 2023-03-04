import React, { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className = "",
  onSubmit,
  children,
  ...rest
}) => {
  return (
    <button
      type="submit"
      className={`bg-primary-background-image rounded-xl font-bold text-base text-[#1C2135] px-8 py-3  ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
