'use client'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AppointmentTime() {
  const router = useRouter()
  return (
    <div className='py-3  m-4  rounded-xl p-2 min-h-72  bg-white w-full border-b'>
      <Button onClick={() => router.push('/appointments')} className='font-sans px-6 py-[7] text-lg' variant={'ghost'}><ArrowLeft className='mr-1' size={16} /> Randevu Al</Button>
    <div className="p-3">
    <div className="flex  items-center ">
        <div className="flex gap-1">
          <label className='text-sm  font-bold '> Hekim: </label> 
          <label className='text-sm  font-sans '> ESMA NUR GÖDELEK </label> 
        </div>
          <Button variant={'ghost'}><Star className='text-yellow-400'/></Button>
        </div>
    </div>

    </div>
  )
}
