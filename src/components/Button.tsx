// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

export default Button;
