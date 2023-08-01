import React from "react";

export const CardBlog = ({ imgLink, imgAlt, description, timeToRead }) => {
  return (
    <div className="card mb-4 box-shadow" style={{width:"200px"}}>
      <img
        className="card-img-top"
        src={imgLink}
        alt={imgAlt}
        style={{ height: "225px", width: "100%", display: "block" }}
      />
      <div className="card-body">
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            View
          </button>
          <small className="text-muted">{timeToRead} mins</small>
        </div>
      </div>
    </div>
  );
};
