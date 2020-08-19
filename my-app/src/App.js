import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Square from './components/Square'

function App() {
  const [result, setResult] = useState();

  const listId = [];
  const pushId = (id) => {
    listId.push(id)
    console.log(listId);
  }  

  const checkId = (id) => {
    if(listId.length !== 1){
      if(id === listId[0]){
        listId.splice(0, listId.length);
        console.log("chon dung");
      }
      else{
        console.log("chon sai");
      }
    }  
  }

  const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  let list = [];
  for(let i=1; i<=16; i++){
    const id = i%8;
    list.push(<Square pushId={pushId} id={id} checkId={checkId}></Square>);
  }

  return (
    <div className='container'>
        {shuffle(list)}
    </div>
  )
}

export default App;
