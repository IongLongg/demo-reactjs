import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Square from './components/Square'

function App() {
  // const [status, setStatus] = useState();
  const [wrongId, setWrongId] = useState([]);

  const listId = [];
  const listTrueId = [];

  const checkId = (id) => {   
    if(listTrueId.indexOf(id) === -1) 
      listId.push(id);

    if(listId.length === 2){
      if(listId[0] === listId[1]){
        listTrueId.push(listId[0]);
        console.log('chon dung');
      }
      else if(listId[0] !== listId[1]){
        console.log('chon sai', listId);
        setWrongId(listId);
      }
      listId.splice(0, 2);
    }

    if(listTrueId.length === 8)
      alert('Win roi');
  }



  let list = [];
  for(let i=1; i<=16; i++){
    const id = i%8;
    list.push(<Square id={id} checkId={checkId} wrongId={wrongId}></Square>);
  }

  return (
    <div className='container'>
        {list}
    </div>
  )
}

export default App;
