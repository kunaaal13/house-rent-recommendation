import { HomeIcon } from '@heroicons/react/24/solid'
import DashboardCard from './DashboardCard'

function Dashboard() {
  return (
    <div className='h-full w-full bg-stone-300 p-20'>
      <div className='w-full bg-white h-80 p-5 flex flex-col flex-1'>
        <h1 className='text-lg font-semibold text-gray-400'>
          Welcome back, Administrator
        </h1>

        <hr className='h-1 w-full my-3 bg-gray-400' />

        <div className='w-full grid grid-cols-3 gap-x-10 flex-1'>
          <DashboardCard
            Icon={HomeIcon}
            title='Total houses'
            number='3'
            color={`#007dff`}
          />
          <DashboardCard
            Icon={HomeIcon}
            title='Total tenants'
            number='2'
            color={`#ffbe00`}
          />
          <DashboardCard
            Icon={HomeIcon}
            title='Payments this month'
            number='0.00$'
            color={`#00aa34`}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
