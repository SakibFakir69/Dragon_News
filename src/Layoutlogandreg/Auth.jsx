

import React from 'react'
import Headerlogo from '../Pages/Headerlogo'
import HeadTimeandText from '../Pages/HeadTimeandText'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Navbar'

function Auth() {
  return (
    <div className='bg-gray-200 min-h-screen'>
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Auth