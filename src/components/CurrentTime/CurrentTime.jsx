import React, { useState } from "react";

export const CurrentTime = () => {
  //    Написать компонент, который выводит текущее время в формате "23:51:38"
  //    время должно обновляться каджую секунду

  const [time, setTime] = useState("Wait 1 sec");

  setInterval(() => {
    setTime(getCurrentTime);
  }, 1000);
  function getCurrentTime() {
    const currentdate = new Date();
    return (
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds()
    );
  }

  return <div>{time}</div>;
};
