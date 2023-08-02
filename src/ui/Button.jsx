import React from "react";

export const Button = ({ className = "btn-primary", text = "Отправить" , onClick = () =>{} }) => {
  const baseClass = ["btn"];
  baseClass.push(className);
  return <button className={baseClass.join(" ")} onClick={onClick}>{text}</button>;
};
