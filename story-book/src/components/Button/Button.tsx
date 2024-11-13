import React from "react";
import "./Button.scss";

interface ButtonProps {
  variant: "primary" | "secondary" | "text";
  size: "small" | "medium" | "large";
  color: "blue" | "red" | "green";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ variant, size, color, text }) => {
  return (
    <button className={`button ${variant} ${size} ${color}`}>{text}</button>
  );
};

export default Button;
