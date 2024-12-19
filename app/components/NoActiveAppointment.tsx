import { CalendarHeart } from 'lucide-react'
import React from 'react'

export default function NoActiveAppointment() {
  return (
    <div className="flex flex-col justify-center items-center h-72 ">
            <CalendarHeart size={100} color='gray' />
            aktif Randevunuz yok
          </div>
  )
}
