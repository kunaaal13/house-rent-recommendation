'use client'

import { ChevronDownIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className='h-16 w-full bg-blue-500 flex items-center justify-between px-10 text-white'>
      <h1 className='text-xl font-semibold'>House Rental Management System</h1>

      <div className='flex items-center space-x-3 cursor-pointer'>
        <h3>Administrator</h3>

        <ChevronDownIcon className='h-3 w-3' />
      </div>
    </header>
  )
}

export default Header
