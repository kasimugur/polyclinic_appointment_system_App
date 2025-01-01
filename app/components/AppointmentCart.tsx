import { Button } from '@/components/ui/button'
import { myAppointment } from '@/constans'
import { BriefcaseMedical, CirclePlus, CircleX, Hospital, Stethoscope, Tag } from 'lucide-react'
import React from 'react'

const AppointmentCart: React.FC<{ item: myAppointment }> = ({ item }) => {
  return (
    <div className='py-3 flex m-4  w-full border-b'>
      <div className="flex basis-2/5 flex-col">
        <div className='flex flex-col  ' >
          <div><span className=' rounded-xl px-2 bg-[#2DB7F5] '>{item.AppointmentDate} {item.AppointmentTime}</span></div>
          <div className="flex gap-3 items-center ">
            <Tag size={12} />
            <label className={`text-xs font-bold 
            ${item.Status.toLowerCase() === 'iptal edildi' && 'text-[#ff3300]'}
            ${item.Status.toLowerCase() === 'geçmiş' && 'text-[#d40d12]'}
              ${item.Status.toLowerCase() === 'aktif' && 'text-[#65ac18]'}  `}> {item.Status} Randevu </label>
          </div>
          <div className="flex gap-3 items-center ">
            <Tag size={12} />
            <label className='text-xs '>muayene </label>
          </div>
          <div className="flex gap-3 items-center ">
            <Stethoscope size={12} />
            <label className='text-sM '>{item.DoctorName}</label>
          </div>
        </div>
      </div>
      <div className="flex  basis-2/4 flex-col">
        <div className="flex gap-3 items-center ">
          <Hospital size={12} />
          <label className='text-sm '>{item.HospitalName} </label>
        </div>
        <div className="flex gap-3 items-center ">
          <BriefcaseMedical size={12} />
          <label className='text-sm '>{item.DepartmentName} </label>
        </div>
        <Button className={`px-6 mt-3
               ${item.Status.toLowerCase() === 'aktif' && 'bg-[#d40d12]'}
               ${item.Status.toLowerCase() === 'geçmiş' && 'bg-[#2DB7F5]'}
               `} variant={'default'} size={'icon'} >
          {item.Status.toLowerCase() === 'aktif' && <CircleX />}
          {item.Status.toLowerCase() === 'geçmiş' && <CirclePlus />}
        </Button>
      </div>
    </div>
  )
}
export default AppointmentCart;
