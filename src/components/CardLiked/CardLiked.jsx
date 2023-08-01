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
    <div class="card flex-md-row mb-4 box-shadow h-md-250" style={{width:"200px"}}>
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-primary">{category}</strong>
        <h3 class="mb-0">
          <a class="text-dark" href={link}>
            {heading}
          </a>
        </h3>
        <div class="mb-1 text-muted">{date}</div>
        <p class="card-text mb-auto">{description}</p>
        <a href="%LINK%">Continue reading</a>
      </div>
      <img
        class="card-img-right flex-auto d-none d-md-block"
        alt={imgAlt}
        style={{ width: "200px", height: "250px" }}
        src={imgLink}
      />
    </div>
  );
};
