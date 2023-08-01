import React from 'react'

export const Badge = ({type = "secondary", children}) => {
  return (
    <span className={"badge bg-" + (type)}>{children}</span>
  )
}
