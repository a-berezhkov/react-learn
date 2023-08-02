import React from "react";
import "./Button.css";

export const Button = ({
  children,
  size = "s",
  variant = "success",
  className,
  hendler,
}) => {
  const rootClases = ["btn", className];

  if (variant === "success") {
    rootClases.push("green");
  } else if (variant === "error") {
    rootClases.push("red");
  }

  if (size === "s") {
    rootClases.push("small");
  } else if (size === "l") {
    rootClases.push("large");
  }

  return (
    <button className={rootClases.join(" ")} onClick={hendler}>
      {children}
    </button>
  );
};
