import React, { useState } from "react";

export  const Counter2 = () =>{

    const[value, setValue] = useState(0)
    const[increment, setIncrement] = useState(1)

    function plus(){
        setIncrement((val) => val+1 )
        setValue((val) => val+increment)
        
    }
    function minus(){
        setIncrement((val) => val+1 )
        setValue((val) => val-increment )
        
    }
    return (
        <div> 
            <h2>{value}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}