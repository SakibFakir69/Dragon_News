

import React from 'react'
import Headerlogo from '../Pages/Headerlogo'
import HeadTimeandText from '../Pages/HeadTimeandText'
import Nav from '../Pages/Nav'
import Navbar from '../Pages/Navbar'
import { Outlet } from 'react-router-dom'
import Leftbar from '../Leftbar/Leftbar'

function HomeLayouts() {
  return (
    <div>
        <header className='mt-4 mx-auto '>
            <Headerlogo/>
            <HeadTimeandText/>

        </header>
        <nav>
            <Nav/>
            <Navbar/>

        </nav>
        <main className='grid grid-cols-12 gap-4 px-4 mt-4'>

            <aside className='col-span-3 border-2'>
                <Leftbar/>
            </aside>
            <section className='col-span-6 border-2'>
                <Outlet/>
            </section>

            <aside className='col-span-3 border-2'>
                Right
            </aside>

        </main>


    </div>
  )
}

export default HomeLayouts