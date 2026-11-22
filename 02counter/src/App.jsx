import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const increseval = ()=>{
    if(counter>=5){
      // counter = 0
      setCounter(counter = 0)
    }else {
      setCounter((pcounter) => pcounter+1)
      setCounter((counter) => counter+1)
    }  // console.log(counter+1);
  }
  const decreseval = ()=>{
    if(counter<=0){
       setCounter(counter = 0)
    }
    else setCounter(counter-1) 
    // console.log(counter-1);
  }

  // const count = document.getElementById('count');
  // const incbtn = document.getElementById('incbtn');
  
  // incbtn.addEventListener("Click", ()=>{
  //   count.innerText = `counter value : ${counter+1}`
    
  // })


  
  
  return (
    <>
    <h2>counter project</h2>
    <h3>counter value : {counter}</h3>
    <button onClick={increseval} >increace value {counter}</button>
    <br />  
    <button onClick={decreseval}>decreace value {counter}</button>
    <br />
    <p>counter value {counter}</p>

    </>
  )
}

export default App
