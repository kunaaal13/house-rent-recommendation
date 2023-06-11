import Header from '@/components/Header'
import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex h-screen flex-col overflow-hidden'>
      <Header />

      <div className='flex flex-1 w-full'>
        <Sidebar />
        <Main />
      </div>
    </main>
  )
}
