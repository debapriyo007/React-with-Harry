import React, { useContext } from 'react'
import Components1 from './Components1'
import { counterContext } from '../context/context'



const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
        <button onClick={()=>{value.setCount(value.count+1)}}> <span><Components1/></span>I am a Button</button>
    </div>
  )
}

export default Button