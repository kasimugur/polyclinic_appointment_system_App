import { CalendarHeart } from 'lucide-react'
import React from 'react'
interface NoActiveAppointmentProps{
  children: string;
}
export default function NoActiveAppointment({children}:NoActiveAppointmentProps) {
  return (
    <div className="flex flex-col justify-center items-center h-72 ">
            <CalendarHeart size={100} color='gray' />
            {children} Randevunuz yok
          </div>
  )
}
