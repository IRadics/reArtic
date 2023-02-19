import React from "react";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import "./Button.scss";

const Button = React.forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  const { className, ...htmlButtonProps } = props;

  return (
    <button
      className={`button ${className ? className : ""}`}
      ref={ref}
      {...htmlButtonProps}
    ></button>
  );
});

export default Button;
