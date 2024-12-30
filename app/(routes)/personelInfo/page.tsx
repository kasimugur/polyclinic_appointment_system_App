'use client'
import { useSiteContext } from '@/app/context/SiteContext'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function PersonelInfo() {
  const { users, userId } = useSiteContext()


  return (
    <div className='bg-white rounded-md p-2 m-6'>
      <header className='px-6'> <h1 className='py-[14] text-lg'> Kişisel Bilgiler</h1></header>
      {users.filter(item => item.UserID === userId).map(info => (
        <div key={info.UserID} className="p-[10]">
          <div className="mb-[10]">
            <label className='font-bold text-black'>Ad Soyad :</label>
            <Input disabled className='text-sm' value={info.FullName}/>
          </div>
          <div className="mb-[10]">
            <label className='font-bold text-black'>E-mail :</label>
            <Input disabled className='text-sm' value={info.Email}/>
          </div>
          <div className="mb-[10]">
            <label className='font-bold text-black'>Branş :</label>
            <Input disabled className='text-sm' value={info.Role}/>
          </div>
        </div>
      ))}
    </div>
  )
}
