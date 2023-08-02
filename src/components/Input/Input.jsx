import React from 'react'

export const Input = ({value, onChangeHendler}) => {

  return (
    <input value={value} type="text" onChange={onChangeHendler} />
  )
}
