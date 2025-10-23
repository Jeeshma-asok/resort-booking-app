import React from "react";

const Button = ({ text, onClick, type = "button", variant = "primary", className = "", disabled }) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
    Orange:
      "bg-amber-500 text-gray-900 hover:bg-amber-400 focus:ring-amber-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} px-4 py-2 ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
