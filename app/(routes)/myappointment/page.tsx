'use client'
import NoActiveAppointment from '@/app/components/NoActiveAppointment'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function AppointmentPage() {
  const [active, setActive] = useState('yesMeeting')
  return (
    <div className='bg-white rounded-xl  h-[459]'>
      <div className="m-6">
        <div className="p-4">
          <h1 className='px-6 py-3 text-xl'>Randevu Geçmiş Listesi</h1>
          <div className="mt-2">
            <Tabs  defaultValue="randevular" >
              <TabsList className="flex justify-start bg-transparent  border-b">
                <TabsTrigger value="randevular">
                  <Button value="randevular"
                    onClick={() => setActive('yesMeeting')} variant={'ghost'}
                    className={`  appointmentButton mr-[2] ${active === 'yesMeeting' ? 'active-tab' : 'bg-gray-100'} `}
                  >Randevularım</Button>
                </TabsTrigger>
                <TabsTrigger value="Geçmiş Randevular">
                  <Button value="Geçmiş Randevular"
                    onClick={() => setActive('noMeeting')} variant={'ghost'}
                    className={`appointmentButton ${active === 'noMeeting' ? 'active-tab' : 'bg-gray-100'} `}
                  >Geçmiş Randevular</Button></TabsTrigger>
              </TabsList>
              <TabsContent value="randevular">
                <NoActiveAppointment children='Aktif' />
                <div className="flex justify-end items-center">
                  <Button className='cursor-no-drop' variant={'ghost'}> <ChevronLeft /> </Button>
                  <p>0</p>
                  <Button className='cursor-no-drop' variant={'ghost'}> <ChevronRight /> </Button>
                </div>
              </TabsContent>
              <TabsContent value="Geçmiş Randevular">
                <NoActiveAppointment children='Geçmiş' />
                <div className="flex justify-end items-center">
                  <Button className='cursor-no-drop' variant={'ghost'}> <ChevronLeft /> </Button>
                  <p>0</p>
                  <Button className='cursor-no-drop' variant={'ghost'}> <ChevronRight /> </Button>
                </div>
              </TabsContent>
            </Tabs>

          </div>
        </div>
      </div>

    </div>
  )
}
