import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)
//let counter = 5;
  const addValue = ()=>{
    //counter = counter+1;
    if(counter == 20){
      return;
    }
    setCounter(counter+1)
  }
  const removeValue = ()=>{
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  }
  return (//here ui ux controlled by react
    <>
      <h1>hello react </h1>
      <h2>couter value :{counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
     <br/>
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
