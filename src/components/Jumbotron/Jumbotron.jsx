import React from "react";

export const Jumbotron = ({title, description, buttonLabel}) =>{
    return <div className="container-fluid py-5">
    <h1 className="display-5 fw-bold">{title}</h1>
    <p className="col-md-8 fs-4">{description}.</p>
    <button className="btn btn-primary btn-lg" type="button">{buttonLabel}</button>
  </div>
}