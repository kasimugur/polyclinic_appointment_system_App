
import { Button } from '@/components/ui/button'
import { myAppointment } from '@/constans'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import { BriefcaseMedical, Calendar, CirclePlus, CircleX, Hospital, Stethoscope, Tag } from 'lucide-react'
import React from 'react'

const MyAppointmentCart: React.FC<{ item: myAppointment }> = ({ item }) => {
  const { toast } = useToast()
  const cancelAppointment = async (appointmentId: number) => {
    console.log("appointment id number mi değil mi", appointmentId)
    try {
      const response = await axios.put('/api/appointment', {
        appointmentId, // İptal edilecek randevu ID'si
      });
      toast({
        variant: 'successful',
        title: "randevu iptali",
        description: "Randevunuz başarılı bir şekilde  iptal edildi.",
      });
      console.log(response.data.message); // İptal mesajını yazdır
    } catch (error) {
      toast({
        variant: 'destructive',
        title: "randevu iptali",
        description: "Randevunuz iptal edilemedi tekrar deneyiniz.",
      });
      console.error('Randevu iptal edilemedi:', error);
      // Hata durumunda kullanıcıya bir bildirim gösterebilirsiniz
    }
  };
  return (
    <div className='py-3 justify-between flex m-4  w-full border-b'>
      <div className='flex flex-col  ' >
        <div><span className=' rounded-xl flex px-2 text-white items-center bg-[#2DB7F5] '> <Calendar size={12} /> {item.AppointmentDate} {item.AppointmentTime}</span></div>
        <div className="flex gap-3 items-center ">
          <Tag size={12} />
          <label className={`text-xs font-bold 
          ${item.Status.toLowerCase() === 'iptal edildi' && 'text-[#ff3300]'}
          ${item.Status.toLowerCase() === 'geçmiş' && 'text-[#d40d12]'}
            ${item.Status.toLowerCase() === 'aktif' && 'text-[#65ac18]'}  `}> {item.Status} Randevu </label>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-3 items-center ">
          <Hospital size={12} />
          <label className='text-sm '>{item.HospitalName} </label>
        </div>
        <div className="flex gap-3 items-center ">
          <BriefcaseMedical size={12} />
          <label className='text-sm '>{item.DepartmentName} </label>
        </div>
      </div>
      <div className="flex gap-3 items-center ">
        <Stethoscope size={12} />
        <label className='text-sM '>{item.DoctorName}</label>
      </div>
      <div className="flex gap-3 items-center ">
        <Tag size={13} />
        <label className='text-sm font-bold '>muayene </label>
      </div>
      <Button className={`px-6  mt-3
         ${item.Status.toLowerCase() === 'aktif' && 'bg-[#d40d12]'}
         ${item.Status.toLowerCase() === 'geçmiş' && 'bg-[#2DB7F5]'}
         `}
        onClick={() => cancelAppointment(item.AppointmentID)}
        variant={'default'} size={'icon'} >

        {item.Status.toLowerCase() === 'aktif' && <CircleX />}
        {item.Status.toLowerCase() === 'geçmiş' && <CirclePlus />}
      </Button>
    </div>

  )
}

export default MyAppointmentCart