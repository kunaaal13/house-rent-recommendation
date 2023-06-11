import { ChevronRightIcon } from '@heroicons/react/24/solid'

type props = {
  Icon: any
  color: string
  number: string
  title: string
}

function DashboardCard({ Icon, color, number, title }: props) {
  return (
    <div
      className='w-full h-full bg-white rounded-md'
      style={{
        border: `1px solid ${color}`,
      }}
    >
      <div
        className='h-4/5 w-full p-3'
        style={{
          backgroundColor: color,
        }}
      >
        <div className='flex items-center justify-end'>
          <Icon className='h-12 w-12 text-white' />
        </div>

        <div className='ml-5 space-y-5'>
          <h1 className='text-white text-2xl font-semibold'>{number}</h1>

          <h3 className='text-white text-lg font-semibold'>{title}</h3>
        </div>
      </div>

      <div className='my-4 flex items-center justify-end'>
        <h3>Items List</h3>

        <ChevronRightIcon className='h-4 w-4 ml-2' />
      </div>
    </div>
  )
}

export default DashboardCard
