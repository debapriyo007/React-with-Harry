import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
  console.log("Navbar is Render")
  return (
    <div>
        I am a {adjective} Navbar.
        <br />
        <button onClick={()=>{getAdjective()}}>Click Me {getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)