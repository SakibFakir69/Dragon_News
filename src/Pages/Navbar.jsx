
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    
  return (
    <div className='flex justify-between px-4 p-4'>

        <div>

        </div>
        <div className='flex gap-4'>
            <p>Home</p>
            <p>About</p>
            <p>Career</p>

        </div>
        <div className='flex gap-4'>
            <img src='../assets/user.png' className='rounded-full'/>

            <NavLink  to='/auth/login' className={`bg-black py-2 px-6 rounded-md text-white `}>Login</NavLink>

         
        </div>


    </div>
  )
}

export default Navbar