"use client";

import React from "react";

export enum ButtonStyles {
  Primary = "bg-blue-500 hover:bg-blue-700 text-white",
  Danger = "bg-red-500 hover:bg-red-700 text-white",
}

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: ButtonStyles;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "Primary",
}) => {
  const baseStyles =
    "px-4 py-2 rounded text-white transition-colors bg-blue-500 hover:bg-blue-700";

  return (
    <button
      type={"button"}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
