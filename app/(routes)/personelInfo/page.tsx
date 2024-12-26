import { Input } from '@/components/ui/input'
import React from 'react'

export default function PersonelInfo() {
  return (
    <div className='bg-white rounded-md p-2 m-6'>
      <header className='px-6'> <h1 className='py-[14] text-lg'> Kişisel Bilgiler</h1></header>
      <div className="p-[10]">
        <div className="mb-[10]">
          <label className='font-bold text-black'>Adı Soyadı :</label>
          <Input disabled className='text-sm' value={'Kasım Uğur'} />
        </div>
        <div className="mb-[10]">
          <label className='font-bold text-black'>Email :</label>
          <Input disabled className='text-sm' value={'kasımtest@test.com'} />
        </div>
        <div className="mb-[10]">
          <label className='font-bold text-black'>Branş :</label>
          <Input disabled className='text-sm' value={'Hasta'} />
        </div>
      
      </div>
    </div>
  )
}
