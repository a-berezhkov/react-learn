import React, { useState } from 'react'

export const MouseCoords = () => {

    const rectStyle = {
        width: "500px",
        height: "500px",
        border: "1px solid"
    }
    const [coords, setCoords] = useState({"x": undefined, "y": undefined})
    const [mousePosText, setMousePosText] = useState("")

    const mouseIn = (evt) =>{
        setCoords({ "x" : evt.clientX, "y": evt.clientY });
        setMousePosText(`X: ${coords.x} Y: ${coords.y} ` )
   }
    
  return (
    <div>
        <div className="showCoords">{mousePosText}</div>
        <div className="windowCoords" onMouseMove={mouseIn} style={rectStyle}></div>

    </div>
  )
}
