

import React from 'react'
import Headerlogo from '../Pages/Headerlogo'
import HeadTimeandText from '../Pages/HeadTimeandText'
import { Outlet } from 'react-router-dom'

function Auth() {
  return (
    <div>
        <header>
            <Headerlogo/>
            <HeadTimeandText/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Auth