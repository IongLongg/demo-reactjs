import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Square from './components/Square'

function App() {
  const list = [];
  for(let i=1; i<=64; i++){
    let color = '';
    const row = Math.ceil(i/8); 
    const check = row + i;
    if(check%2 !== 0)
      color = 'pink';
    else 
      color = 'white';
    
    const col = (i-1)%8;
    let char = String.fromCharCode(col+65);
    list.push(<Square colorSquare={color} index={row} char={char}></Square>)
  }
  return (
    <div className="container">
      {list}
    </div>
  )
}

export default App;
