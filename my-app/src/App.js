import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Row1 from './components/Row1'
import Row2 from './components/Row2'

function App() {
  const list = [1, 2, 3, 4, 5, ,6, 7, 8]
  return list.map(item => {
    return (item%2) ? <div><Row1/></div> : <div><Row2/></div> 
  })
}

export default App;
