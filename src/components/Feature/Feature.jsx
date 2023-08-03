import React from "react";

export const Feature = ({
  heading,
  subHeading,
  description,
  imgUrl,
  imgPos = "left",
}) => {
  let itemContent = "";
  if (imgPos === "left") {
    itemContent = (
      <>
        <div className="col-md-7">
          <h2>
            {heading} <span className="text-muted">{subHeading}</span>
          </h2>
          <p className="lead">{description}</p>
        </div>
        <div className="col-md-5">
          <img className="img-fluid mx-auto" alt="" src={imgUrl} width="500" />
        </div>
      </>
    );
  } else {
    itemContent = (
      <>
        <div className="col-md-5">
          <img className="img-fluid mx-auto" alt="" src={imgUrl} width="500" />
        </div>
        <div className="col-md-7">
          <h2>
            {heading} <span className="text-muted">{subHeading}</span>
          </h2>
          <p className="lead">{description}</p>
        </div>
      </>
    );
  }

  return(
  <div class="row">{itemContent}</div>);
};
