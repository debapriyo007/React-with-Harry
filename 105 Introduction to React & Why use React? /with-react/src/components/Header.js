import React from 'react'

const Header = (props) => {
  return (

    <div>
      <div className="logo">{props.logoText}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Header