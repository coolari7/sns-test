import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";

export function Button(props: ButtonProps) {
  const { className = "", ...rest } = props;

  return <button {...rest} className={`btn ${className}`} />;
}
