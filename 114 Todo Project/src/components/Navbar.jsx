import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between  bg-indigo-900 text-white py-3'>
        <div className="logo">
            <span className=' font-bold text-xl mx-9'>iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className=' cursor-pointer  hover:font-bold translate-all'>Home</li>
            <li className=' cursor-pointer  hover:font-bold translate-all'>About</li>
            <li className=' cursor-pointer  hover:font-bold translate-all'>Contact Us</li>
            <li className=' cursor-pointer hover:font-bold translate-all'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar