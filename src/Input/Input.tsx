import React, { InputHTMLAttributes } from "react";
import "./Input.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  const { className = "", ...rest } = props;

  return <input {...rest} className={`inputelem ${className}`} />;
}
