'use client'

import { Button } from '@/components/ui/button'
import { Hospital } from 'lucide-react'
import NoActiveAppointment from './NoActiveAppointment'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { useState } from 'react'
import AppointmentCart from './AppointmentCart'
import { useRouter } from 'next/navigation'
import { useSiteContext } from '../context/SiteContext'

export default function Hero() {
  const { userAppointment } = useSiteContext()
  const [active, setActive] = useState('yesMeeting')
  const router = useRouter()

  const filteredAppointments = userAppointment.filter(item => 
    item.Status.toLowerCase() === "geçmiş" || 
    item.Status.toLowerCase() === "iptal edildi"
);

  return (
    <div className="p-[25]  ">
      <div className=" flex p-4 rounded-md bg-white  space-x-6">
        <div className="basis-1/3">
          <div className="flex flex-col space-y-6">

            <Button onClick={() => router.push('/appointmentForm')} className='bg-[#A7161A] hover:bg-[#c54c50] h-36 md:h-48 rounded-xl  shadow-sm' >
              <div className="flex items-center gap-2">
                <Hospital className='hospitalIcons' />
                <div className="text-start">
                  <h1>Hastane Randevusu Al</h1>
                  <p className='text-xs'>Hastanede bulunan kliniklerden randevu alabilirsiniz</p>
                </div>
              </div>
            </Button>
          </div>
        </div>
        <div className="basis-3/5">
          <Tabs className='' defaultValue="randevular" >
            <TabsList className="flex justify-start bg-transparent   border-b">
              {/* <TabsTrigger value="randevular">
                <Button value="randevular"
                  onClick={() => setActive('yesMeeting')} variant={'ghost'}
                  className={`  appointmentButton mr-[2] ${active === 'yesMeeting' ? 'active-tab' : 'bg-gray-100'} `}
                >Randevularım</Button>
              </TabsTrigger>
              <TabsTrigger value="Geçmiş Randevular">
                <Button value="Geçmiş Randevular"
                  onClick={() => setActive('noMeeting')} variant={'ghost'}
                  className={`appointmentButton ${active === 'noMeeting' ? 'active-tab' : 'bg-gray-100'} `}
                >Geçmiş Randevular</Button></TabsTrigger> */}
              <TabsTrigger value="randevular">
                <div
                  onClick={() => setActive('yesMeeting')}
                  className={`appointmentButton mr-[2]   ${active === 'yesMeeting' ? 'active-tab' : 'bg-gray-100'}`}
                >
                  Randevularım
                </div>
              </TabsTrigger>
              <TabsTrigger value="Geçmiş Randevular">
                <div
                  onClick={() => setActive('noMeeting')}
                  className={`appointmentButton ${active === 'noMeeting' ? 'active-tab' : 'bg-gray-100'}`}
                >
                  Geçmiş Randevular
                </div>
              </TabsTrigger>

            </TabsList>
            <TabsContent className="overflow-y-scroll overflow-x-hidden flex flex-col justify-start items-center  " value="randevular">
              {userAppointment.length > 0 ? userAppointment.filter(item => item.Status.toLowerCase() === "aktif").map(item => <AppointmentCart key={item.AppointmentID} item={item} />) : <NoActiveAppointment children='Aktif' />}


            </TabsContent>
            <TabsContent value="Geçmiş Randevular">
              {filteredAppointments.length > 0 ?  filteredAppointments.map(item => <AppointmentCart key={item.AppointmentID} item={item} />) : <NoActiveAppointment children='Geçmiş' />}

            </TabsContent>
          </Tabs>

          <Button
            onClick={() => router.push('/myappointment')}
            className='bg-[#e7e7e7] text-gray-400 w-full  hover:bg-[#e7e7e7] mt-10 cursor-no-drop'>Tümünü göster</Button>
        </div>
      </div>
    </div>
  )
}
