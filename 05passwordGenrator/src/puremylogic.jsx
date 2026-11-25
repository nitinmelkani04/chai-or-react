// import { useEffect, useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [password, setPassword] = useState("")
//   const [length, setLength] = useState(10)
//   const [number,setNumber] = useState(false)
//   const [specialchar,setSpecialchar] = useState(false)
//   const [copy, setCopy] = useState(false)

//   useEffect(()=>{
//     setPassword(genPass(length))
//   },[length,number,specialchar])

//   // useEffect(()=>{




//   // },[copy])

//   function genPass(length){

//     let password = ""

//     if(number){
//       length -= 1
//       password += genNum()
//     }
//     if(specialchar){
//       length -= 1
//       password += genSpchar()
//     }

//     for(let i=0; i < length ;i++){
//       password += randomChar()
//     }
    
//     let arr = password.split("");
//     arr.sort(() => Math.random() - 0.5);
//     password = arr.join("");
     
//     return password
//   }

//   function genSpchar(){
//     let spchar = "@#$%&*"
//     return(
//     spchar[Math.floor(Math.random() * spchar.length)]
//     ) 
//   }
//   function genNum(){
//     let Num = "1234567890"
//     return(
//       Num[Math.floor(Math.random() * Num.length)]
//     )
//   }

//   function randomChar(){
//     let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     let numbers = "0123456789";
//     let special = "@#$%&*";
     
//     if(number){char+=numbers}
//     if(specialchar){char+=special}

//     let rndIdx = Math.floor(Math.random() * char.length)
//     return char[rndIdx]
//   }


//   return (
//   <>
//     <h2>{password}</h2>

//     <button onClick={() => {
//       navigator.clipboard.writeText(password)
//       setCopy(true)
//       setTimeout(() => {
//         setCopy(false)
//       }, 2000);
//     }}>
//       {copy ? "Copied!" : "Copy"}
//     </button>

//     <h2>{length}</h2>

//     <input 
//     type="text" 
//     placeholder='password'
//     onChange={(e)=> setPassword(e.target.value)}
//     />
    
//     <input type="range" min='5' max='20' 
//       onChange={(e)=> setLength(Number(e.target.value))} //bhai ye jo value milegi ye str me hoti h so number me convert krliya hai 
//       value={length}
//     />

//     <br />

//     <button onClick={(e)=>setPassword(genPass(length))}>Genrate Password</button>

//     <input type="checkbox" id="Num" checked={number}
//     onChange={(e)=>setNumber(e.target.checked)}/>
//     <label htmlFor="Num">Number</label>


//     <input type="checkbox" id="SPCH" checked={specialchar}
//     onChange={(e)=>setSpecialchar(e.target.checked)}/>
//     <label htmlFor="SPCH">Special Char</label>

//   </>
//   )
// }

// export default App
