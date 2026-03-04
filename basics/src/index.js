import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);//react create it own dom is known as virtual dom so it comapres real dom to virtual dom 
//and comapre to elements and change only those elemts which is required and not compared.
//react gives us power to render our html elemnts we can create our own custome tags.
//we can also change th id.
//here store the refernce inside root varaible.
//render we have to render app.
//react gives us power of jsx and we can render html elements with the help of java script.
// it safe mode of react for development puprose .it many advantages.react.Strictmode for optimization purpose.