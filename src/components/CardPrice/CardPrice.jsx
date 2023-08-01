import React from 'react'




export const CardPrice = ({type,price ,buttonText, children}) => {
    const style = {
        width: "250px"
    }

  return (
        <div className="card mb-4 box-shadow" style={style}>
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{type}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">{price} <small className="text-muted">/ mo</small></h1>
        <div className="mt-3 mb-4">{children}</div>
        <button type="button" className="btn btn-lg btn-block btn-outline-primary">{buttonText}</button>
      </div>
    </div>
  )
}
