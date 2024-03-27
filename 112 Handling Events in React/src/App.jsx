import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [name, setname] = useState("Debu")
  const [from, setFrom] = useState(
    {
      email:"",
      ph:""
    }
  )

  const handeleClick = ()=>{
    alert("Hey i'm clicked")
  }

  const HandelMouseOver = ()=>{
    alert("Hey i'm MouseOver")
  }

  const handleChange = (e)=>{
    // setname(e.target.value)
    setFrom({...from , [e.target.name]:e.target.value})
    console.log(from)
  }

  return (
    <>
      
      <div className="button">
        <button onClick={handeleClick}>Click me</button>
      </div>

      <div onMouseOver={HandelMouseOver} className="red">
        Hey i'm Red Div.
      </div>

      {/* <input type="text" value={name} onChange={handleChange}/> */}
      <input type="text" name='email' value={from.email?from.email:""} onChange={handleChange}/>
      <br />
      <input type="text" name='ph' value={from.ph?from.ph:""} onChange={handleChange}/>
    </>
  )
}

export default App
