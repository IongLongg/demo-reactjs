import React from "react"
import '../App.css';
import BlackSquare from "./BlackSquare"
import WhiteSquare from "./WhiteSquare"

function Row2(){
    const list = [1, 2, 3, 4, 5, ,6, 7, 8]
    return list.map(item => {
        return (item%2) ? <div><BlackSquare/></div> : <div><WhiteSquare/></div> 
    })
}

export default Row2;