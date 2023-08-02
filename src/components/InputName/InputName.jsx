import React, { useState } from 'react'
import { Input } from '../../ui/Input'

export const InputName = () => {

    const [name, setName] = useState("")

    const onChange =(evt) =>{
        setName(evt.target.value)
    }

  return (
    <div>
        <Input name="name" value={name} onChange={onChange}></Input>
        <p>Привет, {name}</p>
    </div>
  )
}
