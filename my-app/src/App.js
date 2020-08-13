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
    if(check%2 != 0)
      color = 'black';
    else 
      color = 'white';
    list.push(<Square colorSquare={color}></Square>)
  }
return <div className="container">{list}</div>
}

export default App;
