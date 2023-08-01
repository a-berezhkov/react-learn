import React from "react";

export const Jumbotron = ({title, description, buttonLabel}) =>{
    return <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">{title}</h1>
    <p class="col-md-8 fs-4">{description}.</p>
    <button class="btn btn-primary btn-lg" type="button">{buttonLabel}</button>
  </div>
}