import React from "react";
// https://saintcode.notion.site/769c3d2535624b37a15cb9e4a292c711?pvs=4

export const BobDylan = () => {
  const data = {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/440px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
    cardTitle: "Bob Dylan",
    cardDescription:
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
      url: "https://en.wikipedia.org/wiki/Bob_Dylan",
      label: "Go to wikipedia",
    },
  };

  return <div className="card" style={{width: "18rem"}}>
      <img src={data.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href={data.url} className="btn btn-primary">Go somewhere</a>
       </div>
   </div>;
};
