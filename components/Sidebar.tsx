'use client'

import { useSidebarStore } from '@/store/sidebar'
import {
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  HomeModernIcon,
  ListBulletIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/solid'

function Sidebar() {
  const options = [
    {
      name: 'Dashboard',
      icon: HomeModernIcon,
    },
    {
      name: 'House Type',
      icon: ListBulletIcon,
    },
    {
      name: 'Houses',
      icon: HomeIcon,
    },
    {
      name: 'Tenants',
      icon: UsersIcon,
    },
    {
      name: 'Payments',
      icon: CreditCardIcon,
    },
    {
      name: 'Reports',
      icon: DocumentChartBarIcon,
    },
    {
      name: 'Users',
      icon: UserCircleIcon,
    },
  ]

  const { selectedOption, setSelectedOption } = useSidebarStore()

  return (
    <div className='h-full flex-[0.18] bg-gray-700'>
      {options.map((option, index) => (
        <div
          className={`flex items-center justify-start p-5 space-x-3 ${
            selectedOption === option.name
              ? 'bg-black text-white'
              : 'bg-gray-400'
          }`}
          key={option.name}
          onClick={() => setSelectedOption(option.name)}
        >
          <option.icon className='h-5 w-5' />

          <h4 className='text-lg font-medium'>{option.name}</h4>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
