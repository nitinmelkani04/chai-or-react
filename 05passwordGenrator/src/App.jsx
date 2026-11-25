import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(10)
  const [number,setNumber] = useState(false)
  const [specialchar,setSpecialchar] = useState(false)
  const [copy, setCopy] = useState(false)

  useEffect(()=>{
    setPassword(genPass(length))
  },[length,number,specialchar])

  function genPass(length){

    let password = ""

    if(number){
      length -= 1
      password += genNum()
    }
    if(specialchar){
      length -= 1
      password += genSpchar()
    }

    for(let i=0; i < length ;i++){
      password += randomChar()
    }
    
    let arr = password.split("");
    arr.sort(() => Math.random() - 0.5);
    password = arr.join("");
     
    return password
  }

  function genSpchar(){
    let spchar = "@#$%&*"
    return(
    spchar[Math.floor(Math.random() * spchar.length)]
    ) 
  }
  function genNum(){
    let Num = "1234567890"
    return(
      Num[Math.floor(Math.random() * Num.length)]
    )
  }

  function randomChar(){
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let special = "@#$%&*";
     
    if(number){char+=numbers}
    if(specialchar){char+=special}

    let rndIdx = Math.floor(Math.random() * char.length)
    return char[rndIdx]
  }


  return (

  <div className="min-h-screen bg-[#080B1A] flex items-center justify-center px-4 py-10">

    <div className="w-full max-w-2xl bg-[#11162B] border border-indigo-500/20 rounded-3xl p-8 shadow-2xl">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          Password <span className="text-violet-500">Generator</span>
        </h1>

        <p className="text-gray-400 mt-3">
          Create strong, secure and unique passwords
        </p>
      </div>

      {/* Password Display */}
      <div className="flex gap-3">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full bg-[#080B1A] text-white border border-indigo-500/30 rounded-xl px-4 py-3 outline-none"
        />

        <button
          onClick={() => {
            navigator.clipboard.writeText(password)
            setCopy(true)
            setTimeout(() => setCopy(false), 2000)
          }}
          className="bg-violet-600 hover:bg-violet-700 text-white px-6 rounded-xl"
        >
          {copy ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Password Length */}
      <div className="mt-8">
        <div className="flex justify-between text-white mb-3">
          <label>Password Length</label>
          <span>{length}</span>
        </div>

        <input
          type="range"
          min="5"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-violet-500 cursor-pointer"
        />
      </div>

      {/* Options */}
      <div className="flex flex-wrap gap-6 mt-7 text-white">

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
            className="accent-violet-500"
          />
          Include Numbers
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={specialchar}
            onChange={(e) => setSpecialchar(e.target.checked)}
            className="accent-violet-500"
          />
          Special Characters
        </label>

      </div>

      {/* Generate Button */}
      <button
        onClick={() => setPassword(genPass(length))}
        className="w-full mt-8 bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-4 rounded-xl transition-all"
      >
        Generate Password
      </button>

    </div>
  </div>
)

}

export default App
