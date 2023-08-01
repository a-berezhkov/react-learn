import React from "react";

export const CardLiked = ({
  category,
  heading,
  date,
  description,
  link,
  imgLink,
  imgAlt,
}) => {
  return (
    <div className="card flex-md-row mb-4 box-shadow h-md-250" style={{width:"200px"}}>
      <div className="card-body d-flex flex-column align-items-start">
        <strong className="d-inline-block mb-2 text-primary">{category}</strong>
        <h3 className="mb-0">
          <a className="text-dark" href={link}>
            {heading}
          </a>
        </h3>
        <div className="mb-1 text-muted">{date}</div>
        <p className="card-text mb-auto">{description}</p>
        <a href="%LINK%">Continue reading</a>
      </div>
      <img
        className="card-img-right flex-auto d-none d-md-block"
        alt={imgAlt}
        style={{ width: "200px", height: "250px" }}
        src={imgLink}
      />
    </div>
  );
};
