import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//create a array.
const nums = new Array(30_000_000).fill(0).map((_, i)=>{
  return{
    index:i, 
    isMagical: i === 29_000_000
  }
})


function App() {
  const [count, setCount] = useState(0)
  const [number, setnumber] = useState(nums)

  // const magical = number.find(item => item.isMagical === true) //this is too expensive computation
  //In react when i change any state the the componenets reRender.when i change count state then it rerender again ana again 
  //so, to stop that we are using "USEMEMEO HOOK"
  const magical = useMemo(() => number.find(item => item.isMagical === true), [number])
  //Now computation happens only one time ..it's no reRender agin and agin .It's store the res some where while rerendering 

  // when use :
  //         Between reRender we don't want our value is reRendering again and again.

  return (
    <>
     <span> Magical Number is : {magical.index}</span>
      <div>
      <h1>useMemo Hook</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          if(count == 10){
            setnumber(new Array(10_000_000).fill(0).map((_, i)=>{
              return{
                index:i, 
                isMagical: i === 9_000_000
              }
            }))
          }
        
        }}>
          count is {count}
        </button>
       
      </div>
      
    </>
  )
}

export default App
