import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const { className = "", ...rest } = props;

  return <button {...rest} className={`btn ${className}`} />;
}
