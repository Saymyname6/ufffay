import React from "react";
import cls from "./button.module.scss";

export const ButtonVariant = {
  SOLID: "solid",
  OUTLINE: "outline",
  CLEAR: "clear",
};

const Button = ({
  type,
  variant = ButtonVariant.SOLID,
  children,
  onClick,
  className,
  disabled,
  fullWidth,
}) => {
  return (
    <>
      <button
        type={type}
        variant={variant}
        onClick={onClick}
        className={`${cls.btn} ${cls[variant]} ${className || ""}`}
        disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;
