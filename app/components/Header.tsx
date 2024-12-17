import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import Profile from './Profile'

export default function Header() {
  return (
    <>
      <div className='px-5 h-16 shadow-sm shadow-gray-100   bg-white flex sticky top-0 items-center justify-around pt-2'>
        <h1 className='text-2xl'>Polikinlik randevu sistemi</h1>
        <div className='w-2/5 relative flex items-center '>
          <Input />
          <Search className=' mr-1 absolute right-0' />
        </div>
        <Profile />
      </div>
    </>
  )
}
