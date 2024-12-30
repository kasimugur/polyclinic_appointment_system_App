'use client'
import { useSiteContext } from '@/app/context/SiteContext'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function PersonelInfo() {
  const { users, userEmail } = useSiteContext()


  return (
    <div className='bg-white rounded-md p-2 m-6'>
      <header className='px-6'> <h1 className='py-[14] text-lg'> Kişisel Bilgiler</h1></header>
      {users.filter(item => item.Email === userEmail).map(info => (
        <div key={info.UserID} className="p-[10]">
          <div className="mb-[10]">
            <label className='font-bold text-black'>{info.FullName} :</label>
            <Input disabled className='text-sm' value={'Kasım Uğur'} />
          </div>
          <div className="mb-[10]">
            <label className='font-bold text-black'>{info.Email} :</label>
            <Input disabled className='text-sm' value={'kasımtest@test.com'} />
          </div>
          <div className="mb-[10]">
            <label className='font-bold text-black'>{info.Role} :</label>
            <Input disabled className='text-sm' value={'Hasta'} />
          </div>
        </div>
      ))}
    </div>
  )
}
