import React from 'react'

export const Input = ({type = "text", className="form-control", onChange = () =>{}, value = "", name}) => {
  return (
    <input type={type} className={className}  name = {name}  value={value} onChange = {onChange}/>
  )
}
