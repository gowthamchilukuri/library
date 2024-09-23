import React from "react";
interface ButtonProps {
    name: string;
    onClick: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
