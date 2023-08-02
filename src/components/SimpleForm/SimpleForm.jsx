import React, { useState } from "react";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";

export const SimpleForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const showMessage = (evt) => {
    evt.preventDefault();
    alert(fname + lname + " , " + getCurrentDate());
  };

  const fnameChange = (evt) => {
    setFname(evt.target.value);
  };
  const lnameChange = (evt) => {
    setLname(evt.target.value);
  };
  /**
   * Get current date in dd.mm.yyyy format
   * @returns string date
   */
  function getCurrentDate() {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    return dd + "." + mm + "." + yyyy;
  }

  return (
    <form>
      <Input name="fname" onChange={fnameChange} value={fname} />
      <Input name="lname" onChange={lnameChange} value={lname} />
      <Button onClick={showMessage} />
    </form>
  );
};
