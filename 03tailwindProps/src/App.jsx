import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card1 from './card'

// src=  "https://picsum.photos/400/300?random=100"

function App() {
  const [count, setCount] = useState(0)

  function randomimg() {
    
    let x = Math.floor(Math.random() * (100-50)) + 0;
    console.log(x)
    return `https://picsum.photos/400/300?random=${x}`;
  }
  return (
    <>
    <div className='gap-4 m-20 flex items-center justify-center flex-wrap'>
      <Card1 imgUrl={randomimg()}  />
      <Card1 imgUrl={randomimg()} link="dynamic change"/>
      <Card1 imgUrl={randomimg()} views = {200} />
      <Card1 imgUrl={randomimg()} views = {200} link="vivek"/>
      <Card1 imgUrl={randomimg()} link="dynamic change"/>
      <Card1 imgUrl={randomimg()} views = {200} link="vivek"/>
    </div>
   
    </>
  )
}

export default App
