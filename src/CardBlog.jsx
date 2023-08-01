import React from "react";

export const CardBlog = ({ imgLink, imgAlt, description, timeToRead }) => {
  return (
    <div class="card mb-4 box-shadow" style={{width:"200px"}}>
      <img
        class="card-img-top"
        src={imgLink}
        alt={imgAlt}
        style={{ height: "225px", width: "100%", display: "block" }}
      />
      <div class="card-body">
        <p class="card-text">{description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            View
          </button>
          <small class="text-muted">{timeToRead} mins</small>
        </div>
      </div>
    </div>
  );
};
