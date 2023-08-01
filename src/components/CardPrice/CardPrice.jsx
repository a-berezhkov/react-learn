import React from 'react'




export const CardPrice = ({type,price ,buttonText, children}) => {
    const style = {
        width: "250px"
    }

  return (
        <div class="card mb-4 box-shadow" style={style}>
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">{type}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">{price} <small class="text-muted">/ mo</small></h1>
        <div class="mt-3 mb-4">{children}</div>
        <button type="button" class="btn btn-lg btn-block btn-outline-primary">{buttonText}</button>
      </div>
    </div>
  )
}
