import React, { useState } from 'react'

export const TextAlign = () => {

    const [align, setAlign] = useState("left")
    const [nextAlign, setNextAlign] = useState("center")

    const style = {
        "text-align": align
    }

    const changeAlign = () =>{
        switch(align){
            case "left":
                setAlign("center")
                setNextAlign("right")
                break
            case "center":
                setAlign("right")
                setNextAlign("left")
                break
            case "right":
                setAlign("left")
                setNextAlign("center")
                break
            default:
                setAlign("left")
        }
        
    }

  return (
   <div>
     <h2 style={style}>Align me</h2>
     <button onClick={changeAlign}>{nextAlign}</button>
   </div>
  )
}
