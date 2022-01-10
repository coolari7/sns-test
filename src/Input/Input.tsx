import React from "react";
import { InputProps } from "./Input.types";
import "./Input.css";

export function Input(props: InputProps) {
  const { className = "", ...rest } = props;

  return <input {...rest} className={`inputelem ${className}`} />;
}
