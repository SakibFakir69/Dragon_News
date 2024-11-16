


import React from 'react'
import Navbar from '../Pages/Navbar'
import { Outlet } from 'react-router-dom'

function Detailspage() {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
    
    
    </div>
  )
}

export default Detailspage