

import React from 'react'
import Marquee from 'react-fast-marquee'

function Nav() {
  return (
    <div className='flex gap-2 px-4'>

        <p className='bg-red-500 py-2 px-6   '>Latest</p>
        <Marquee>
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>


    </div>
  )
}

export default Nav