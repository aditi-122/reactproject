import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { jsx as _jsx} from 'react/jsx-runtime'
import App from './App.jsx'
// const reactElement ={
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   Children:'click me to visit google'
// }//here we are not wrtiing the custom react app so here the working of render it is wriiten by react.
//in any language the there own symatincs that's why here this code is not working.
const anotherElement = (
  <a href='https://google.com' target='_blank'>
    visti to google</a>
)
const anotherUser =  "hello Aditi"
const reactElement = React.createElement(//bable transpiler inject these
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)
function MyApp() {
  return (
    <div>
      <h1>custome app !</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <MyApp /> */}
  //   {/* <reactElement/> */}
  // </StrictMode>,
  //reactElement()//we cannot use like this
    reactElement//objects can call directly
  // anotherElement//this only converting into object
  //<App/>

  // MyApp()//we can also use like this because react is basically a java script.
)
// they loaded the script clasically it saves one step.
//we cannot use object like this example.