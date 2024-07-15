import React from 'react'
import { ModeToggle } from './toggler-mode'
import { Button } from './ui/button'

const Nav = () => {
  return (
    <nav className="h-16 inset-x-0 top-0 w-full border-b z-[40]">
      <div className='w-full h-full py-2 px-4 flex gap-4 items-center justify-between'>
        <div>
          <p>Elliot Hallam</p>
        </div>
        <div className='z-[80]'>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Nav