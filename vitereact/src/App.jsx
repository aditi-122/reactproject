import { useState } from 'react'
import Exmp from './exmp'
function App() {
  const username = "hello ishita"
  return (
    <>
    <Exmp/>
    <h1>vite and react {username}</h1>
    <p>this is test para</p>
    </>//emtpy fragment returning 
   
  )
}

export default App
//if we can understand the flow and comparision of these labirariesso find that the structure is same .if we understand that we can create using any other labiaraies.
//we have to find out how as actually react is injecting our html.
//what is react it .it is just same as java script.
//if we undestand the foundation of injecting react inside our html most of the work is done.it become easy.
//we acn find that exact point at which point our react is entering inside the project .
//which inside curly braces it will be treat as varaible.
//here we have two types of expression first is expression and next one is evaluated expression here we cannot return full js only the final outcome of complete evaluated expression

