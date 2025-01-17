'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BriefcaseMedical, Hospital, Plus, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useAppointmentContext } from '../context/AppointmentContext'

export default function Appointment() {
  const { sentData, depart, hospital } = useAppointmentContext()
  const router = useRouter()

  const departName = depart.filter(item => Number(sentData.map(i => i.departments)) === (item.DepartmentID)).map(e=> e.DepartmentName)
  const hospitalName = hospital.filter(item => Number(sentData.map(i => i.hospitalname)) === (item.hospitalId)).map(e=> e.hospitalName)
  const docName = sentData.map(e => e.doctors)
  return (
    <div className='py-3  m-4 h- rounded-xl p-2 min-h-72  bg-white w-full border-b'>
      <Button onClick={() => router.push('/appointmentForm')} className='font-sans px-6 py-[7] text-lg' variant={'ghost'}><ArrowLeft className='mr-1' size={16} /> Randevu Listesi</Button>
      <div className="flex justify-around border px-6 py-3">

        <div className="flex gap-3 items-center ">
          <Button variant={'ghost'}><Star /></Button>
          <label className='text-sm  font-sans '>{docName} </label>
        </div>

        <div className='flex flex-col' >
          <label className='font-bold'>En Erken Tarih</label>
          <div><span className=' text-sm rounded-xl px-1 bg-[#2DB7F5] '>17.05.2024 08:50</span></div>
          <div className="flex gap-3 items-center ">
            <span className='text-xs text-white font-bold rounded-md px-1 bg-[#26C401]'>yarın</span>
          </div>
        </div>

        <div className="flex gap-3 items-center ">
          <Hospital size={12} />
          <label className='text-sm '>{hospitalName}</label>
        </div>

        <div className="flex gap-3 items-center ">
          <BriefcaseMedical size={12} />
          <label className='text-sm '>{departName}</label>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger><Button className='bg-[#2DB7F5] hover:bg-[#2db6f5ad] scale-105' onClick={() => router.push('/appointmentTime')} variant={"secondary"} ><Plus /> </Button></TooltipTrigger>
            <TooltipContent>
              <p>Randevu al</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>


      </div>
    </div>
  )
}
