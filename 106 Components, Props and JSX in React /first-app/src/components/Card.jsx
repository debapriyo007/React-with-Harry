import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>

        <h1>{props.title}</h1>
        <p>{props.des}</p>
        <img src="https://img.freepik.com/premium-vector/programmer-work-laptop-computer-website-code-program-concept_133260-5400.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1710720000&semt=ais" alt="" 
        />
        {/* style={{border:"2px solid black"}}  --> This way inject inline css in react js*/}
        
    </div>
  )
}

export default Card