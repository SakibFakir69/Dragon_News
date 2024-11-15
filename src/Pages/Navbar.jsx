
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    
  return (
    <div className='flex justify-between px-4 mt-4'>

        <div>

        </div>
        <div className='flex gap-4'>
            <p>Home</p>
            <p>About</p>
            <p>Career</p>

        </div>
        <div className='flex gap-4'>
            <img src='../assets/user.png'/>
            <NavLink  to='/auth/login' className='px-5 py-2 bg-green-300 rounded-sm'>Login</NavLink>
        </div>


    </div>
  )
}

export default Navbar