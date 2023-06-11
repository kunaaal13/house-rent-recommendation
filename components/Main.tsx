'use client'

import { useSidebarStore } from '@/store/sidebar'
import Dashboard from './Dashboard'
import HouseType from './HouseType'

function Main() {
  const { selectedOption } = useSidebarStore()
  return (
    <main className='flex-[0.82] h-full bg-red-100'>
      {selectedOption === 'Dashboard' ? (
        <Dashboard />
      ) : selectedOption === 'House Type' ? (
        <HouseType />
      ) : (
        <div className='flex items-center justify-center h-full w-full'>
          <h1 className='font-semibold text-2xl'>Work in progress</h1>
        </div>
      )}
    </main>
  )
}

export default Main
