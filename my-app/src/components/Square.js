import React, { useState } from "react"
import '../App.css';

function Square({colorSquare, index, char}){
    const [color, setColor] = useState(colorSquare);

    const changeColor = () => {
        if(color === 'pink')
            setColor('orange');
    }  
    
    return (
        <div className="square" onClick={() => changeColor()} style={{ backgroundColor : color}}>     
            {index + char}
        </div>
    );
}

export default Square;