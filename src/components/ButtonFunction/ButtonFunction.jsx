import React from 'react'
 
export const ButtonFunction = ({user, onClick}) => {
  return (
    <button className='btn btn-primary' onClick={() => onClick(user)}>Нажми на меня </button>
  )
}
