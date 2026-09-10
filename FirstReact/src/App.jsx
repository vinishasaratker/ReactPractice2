import { useState } from 'react';
import './App.css'

function App() {

   let  num=5;

    const AddValue=()=>{
    console.log("clicked",num);
    
   num= num+1
   }

  return (
    <>
     <h2>Counter :{num} </h2>
<button onClick={AddValue}> Increment :{num}</button>
<br/>
<br/>
<button onClick={AddValue}> Decrement :{num}</button>
    
    </>
  )

}

export default App
