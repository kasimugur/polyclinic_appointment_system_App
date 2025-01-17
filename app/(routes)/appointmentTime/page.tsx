'use client'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import AppointmentInfo from '@/app/components/AppointmentInfo'
import { useAppointmentContext } from '@/app/context/AppointmentContext'


export default function AppointmentTime() {
  const { sentData } = useAppointmentContext()
  const [openTime, setOpenTime] = useState(false)
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const getNextTenDays = () => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 10; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      dates.push(nextDate.toLocaleDateString('tr-TR')); // Türkçe formatta tarih
    }
    return dates;
  };

  const dates = getNextTenDays()
  const times = [
    ['08:00', '08:10', '08:20', '08:30', '08:40', '08:50'],
    ['09:00', '09:10', '09:20', '09:30', '09:40', '09:50'],
    ['10:00', '10:10', '10:20', '10:30', '10:40', '10:50'],
    ['11:00', '11:10', '11:20', '11:30', '11:40', '11:50'],
  ]
  const router = useRouter()
  const handleClik = (time: string, date:string) => {
    console.log("handleclick appointment Time", time , date,openTime) 
    setSelectedTime(time);
    setSelectedDate(date);
    setOpenTime(true)
  }
  return (
    <>
      <div className='py-3 m-4 rounded-xl p-2 min-h-72 bg-white w-full border-b'>
        <Button onClick={() => router.push('/appointments')} className='font-sans px-6 py-[7] text-lg' variant={'ghost'}>
          <ArrowLeft className='mr-1' size={16} /> Randevu Al
        </Button>
        <div className="p-3">
          <div className="flex items-center">
            <div className="flex gap-1">
              <label className='text-sm font-bold'> Hekim: </label>
              <label className='text-sm font-sans'> {sentData.map(doc => doc.doctors)}</label>
            </div>
            <Button variant={'ghost'}><Star className='text-yellow-400' /></Button>
          </div>
          <Tabs defaultValue={dates[0]} className="w-full">
            <TabsList className='bg-white my-2 px-4 py-3 flex justify-start gap-4'>
              {dates.map((date, index) => (
                <TabsTrigger key={index} className='tabsTrigerBtn' value={date}>
                  {date}
                </TabsTrigger>
              ))}
            </TabsList>
            {dates.map((date, index) => (
              <TabsContent key={index} value={date}>
                <Accordion type="single" collapsible className="w-full">
                  {times.map((timeGroup, timeIndex) => (
                    <AccordionItem key={timeIndex} className='bg-polycgray border rounded-xl' value={`item-${timeIndex}`}>
                      <AccordionTrigger className='px-3'>{timeGroup[0]}</AccordionTrigger>
                      <AccordionContent className='bg-white border-t flex items-center text-center gap-3 w-full'>
                        {timeGroup.map((time, timeIndex) => (
                          <Button
                            key={timeIndex}
                            onClick={()=> handleClik(time, date)}
                            className='bg-polycbtn hover:bg-polycbtnhover hover:text-white focus:bg-polycbtnhover m-1 px-4 text-white '
                            variant={'ghost'}> {time} </Button>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      <AppointmentInfo openTime={openTime} setOpenTime={setOpenTime} time={selectedTime} date={selectedDate} />
    </>
  )
}
