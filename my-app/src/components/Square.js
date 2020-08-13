import React from "react"
import '../App.css';

function Square({colorSquare}){
    return (
        <div className="square" style={{ backgroundColor : colorSquare}}></div>
    );
}

export default Square;