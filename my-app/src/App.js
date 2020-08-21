import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Square from './components/Square'

function App() {
  const [wrongId, setWrongId] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  const listId = [];
  const listTrueId = [];
  const listWrongId = [];
  // tao list anh
  const createImages = (list = []) => {
    if (list.length) return list;
    for (let i = 1; i <= 16; i++) {
      const id = i % 8;
      list.push(<Square id={id} checkId={checkId} wrongId={wrongId}></Square>);
    }
    return list
  };
  // check
  const checkId = (id) => {
    if (listTrueId.indexOf(id) === -1) listId.push(id);
    if (listId.length === 2) {
      // disable click
      setIsChecking(true);
      if (listId[0] === listId[1]) {
        listTrueId.push(listId[0]);
        console.log('chon dung');
        // enable click
        setIsChecking(false);
      }
      else if (listId[0] !== listId[1]) {
        console.log('chon sai', listId);
        listWrongId.push(...listId);
        setTimeout(() => {
          console.log('chon tiep');
          setWrongId(listWrongId);
          // enable click
          setIsChecking(false);
        }, 2000)
      }
      listId.splice(0, 2);
    }
    if (listTrueId.length === 8) alert('Win roi');
  }
  return (
    <div style={{ pointerEvents: isChecking ? 'none' : 'auto' }} className='container'>
      {createImages()}
    </div>
  )
}

export default App;
