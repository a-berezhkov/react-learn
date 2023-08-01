import React from 'react'

export const Badge = ({type = "secondary", children}) => {
    console.log(type);
  return (
    <span className={"badge bg-" + (type)}>{children}</span>
  )
}
