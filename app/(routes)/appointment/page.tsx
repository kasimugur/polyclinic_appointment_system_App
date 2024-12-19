'use client'
import NoActiveAppointment from '@/app/components/NoActiveAppointment'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function AppointmentPage() {
const [active , setActive] = useState('yesMeeting')
  return (
    <div className='bg-white rounded-xl  h-[459]'>
      <div className="m-6">
        <div className="p-4">
          <h1 className='px-6 py-3 text-xl'>Randevu Geçmiş Listesi</h1>
          <div className="mt-2">
            <div className="flex  border-b ">
              <Button onClick={()=> setActive('yesMeeting')}  variant={'ghost'} 
              className={`  appointmentButton mr-[2] ${active === 'yesMeeting' ? 'active-tab' : 'bg-gray-100'} `} 
              >randevularım</Button>
              <Button  onClick={()=> setActive('noMeeting')} variant={'ghost'} 
              className={`appointmentButton ${active === 'noMeeting' ? 'active-tab' : 'bg-gray-100'} `}
               >geçmiş Randevular</Button>
            </div>
            <NoActiveAppointment />

            <div className="flex justify-end items-center">
            <Button className='cursor-no-drop' variant={'ghost'}> <ChevronLeft /> </Button>
            <p>0</p>
            <Button className='cursor-no-drop' variant={'ghost'}> <ChevronRight /> </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
