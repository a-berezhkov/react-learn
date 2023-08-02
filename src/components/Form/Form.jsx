import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const Form = () => {
  const [state, setState] = useState("");

  const hendler = (evt) => {
    setState(evt.target.value);
  };

  const clearValue = () =>{

    setState("")
  }

  return (
    <form onSubmit={(evt) => evt.preventDefault()}>
      <div>{state}</div>
      <Input value={state} onChangeHendler = {hendler} />
      <Button hendler = {clearValue}> Clear</Button>
  
    </form>
  );
};
