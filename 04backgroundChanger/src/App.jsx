import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div style={{backgroundColor: color }} className='w-full h-screen flex justify-center items-end pb-2.5 '>
        <div className='bg-white border-2 rounded-xl flex justify-evenly text-center gap-4 m-3 p-2.5'>
          <button className='bg-white border w-16 text-black text-center rounded-xl'
          onClick={() => setColor("white")}>White</button>
          <button className='bg-red-500 w-16 text-red-50 text-center rounded-xl'
          onClick={() => setColor("red")}>Red</button>
          <button className='bg-yellow-500 text-red-50 w-16 text-center rounded-xl'
          onClick={() => setColor("yellow")}>Yellow</button>
          <button className='bg-blue-500 text-red-50 w-16 text-center rounded-xl'
          onClick={() => setColor("blue")}>Blue</button>
          <button className='bg-pink-500 text-red-50 w-16 text-center rounded-xl'
          onClick={() => setColor("pink")}>Pink</button>
          <button className='bg-black text-red-50 w-16 text-center rounded-xl'
          onClick={() => setColor("black")}>Black</button>
        </div> 
      </div>
    </>
  )
}

export default App
