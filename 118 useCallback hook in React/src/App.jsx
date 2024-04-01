import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [adjective, setAdjective] = useState("good")


  // const getAdjective = ()=>{
  //     return "another" + count
  // } //WithOut using useCallback.
  

  const getAdjective = useCallback(
    ()=>{
      return "another" + count
    },[count]  //array count pass meaning, Joto khon na count state ta chnage hoya6e getAdjective fun k freeze rakho
  ) //useCall back freeze your function.Don't allow you to create another function at the time of reRendering
  

  return (
    <>
      <Navbar adjective={"Good "} getAdjective={getAdjective} />
      <h1>UseCallback Hook</h1>
      <div>
      
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
