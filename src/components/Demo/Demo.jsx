import React from "react";

export function Demo() {
  function divClick() {
    console.log("div");
  }
  function buttonClick(event) {
    event.stopPropagation()
    console.log("button");
  }

  return (
    <div onClick={divClick}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        pariatur ab recusandae in, sit qui dolor officiis laboriosam
        repellendus, nulla quidem et adipisci provident suscipit, neque sapiente
        laudantium rerum ducimus.
      </p>
      <button onClick={buttonClick}>click</button>
    </div>
  );
}
