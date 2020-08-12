import React from "react"
import '../App.css';
import BlackSquare from "./BlackSquare"
import WhiteSquare from "./WhiteSquare"

function Row1(){
    const list = [1, 2, 3, 4, 5, ,6, 7, 8]
    return list.map(item => {
        return (item%2) ? <div><WhiteSquare/></div> : <div><BlackSquare/></div> 
    })
}

export default Row1;