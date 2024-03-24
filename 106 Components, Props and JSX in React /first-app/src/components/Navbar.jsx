import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            
            <div>
            <button>Login</button>
            <button>Signup</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar