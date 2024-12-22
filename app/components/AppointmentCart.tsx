import { Button } from '@/components/ui/button'
import { BriefcaseMedical, CirclePlus, Hospital, Stethoscope, Tag } from 'lucide-react'
import React from 'react'

export default function AppointmentCart() {
  return (
    <div className='py-3 flex m-4  w-full border-b'>
      <div className="flex basis-2/5 flex-col">
        <div className='flex flex-col  ' >
          <div><span className=' rounded-xl px-2 bg-[#2DB7F5] '>17.05.2024 08:50</span></div>
          <div className="flex gap-3 items-center ">
            <Tag size={12} />
            <label className='text-xs font-bold text-[#65ac18]'>Geçmiş Randevu </label>
          </div>
          <div className="flex gap-3 items-center ">
            <Tag size={12} />
            <label className='text-xs '>muayene </label>
          </div>
          <div className="flex gap-3 items-center ">
            <Stethoscope size={12} />
            <label className='text-sM '>ESMA NUR GÖDELEK</label>
          </div>
        </div>
      </div>
      <div className="flex  basis-2/4 flex-col">
        <div className="flex gap-3 items-center ">
          <Hospital size={12} />
          <label className='text-sm '>KARAMAN AĞIZ VE DİŞ SAĞLIĞI MERKEZİ</label>
        </div>
        <div className="flex gap-3 items-center ">
          <BriefcaseMedical size={12} />
          <label className='text-sm '>Dentistry (General Dentistry)</label>
        </div>
        <Button className='px-6  mt-3 bg-[#2DB7F5]' variant={'default'} size={'icon'} ><CirclePlus /> </Button>
      </div>
    </div>
  )
}
