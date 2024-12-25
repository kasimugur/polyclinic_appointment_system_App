'use client'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft,  Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import AppointmentInfo from '@/app/components/AppointmentInfo'


export default function AppointmentTime() {
  const time = ['09:20', "09:30", "09:00", "09:45"]
  const time2 = ['10:20', "10:30", "10:00", "10:45"]

  const router = useRouter()

  const handleClik = (time:string)=> {
    console.log("handleclick")
    return <AppointmentInfo time={time} />
  }
  return (
    <div className='py-3  m-4  rounded-xl p-2 min-h-72  bg-white w-full border-b'>
      <Button onClick={() => router.push('/appointments')} className='font-sans px-6 py-[7] text-lg' variant={'ghost'}><ArrowLeft className='mr-1' size={16} /> Randevu Al</Button>
      <div className="p-3">
        <div className="flex  items-center ">
          <div className="flex gap-1">
            <label className='text-sm  font-bold '> Hekim: </label>
            <label className='text-sm  font-sans '> ESMA NUR GÖDELEK </label>
          </div>
          <Button variant={'ghost'}><Star className='text-yellow-400' /></Button>
        </div>
        <Tabs defaultValue="13.12.2025" className="w-full">
          <TabsList className='bg-white my-2 px-4 py-3    flex justify-start gap-4 ' >
            <TabsTrigger className='tabsTrigerBtn ' value="13.12.2025">
              12.12.2025 - çarşamba
            </TabsTrigger>
            <TabsTrigger className='tabsTrigerBtn ' value="12.12.2025">
              13.12.2025 -perşembe
            </TabsTrigger>
          </TabsList>
          <TabsContent value="13.12.2025">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem className='bg-polycgray  border rounded-xl' value="item-1">
                <AccordionTrigger className=' px-3 ' >09:00 </AccordionTrigger>
                <AccordionContent className='bg-white border-t flex items-center text-center gap-3 w-full'>
                  {time.map(time => <Button 
                    className='bg-polycbtn hover:bg-polycbtnhover hover:text-white focus:bg-polycbtnhover m-1 px-4 text-white'
                    variant={'ghost'}>  {handleClik(time) } </Button>)}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className='bg-polycgray  border rounded-xl' value="item-2">
                <AccordionTrigger className=' px-3 ' >09:00 </AccordionTrigger>
                <AccordionContent className='bg-white border-t flex items-center text-center gap-3 w-full'>
                  {time.map(time => <Button
                    className='bg-polycbtn hover:bg-polycbtnhover hover:text-white focus:bg-polycbtnhover m-1 px-4 text-white'
                    variant={'ghost'}> {time} </Button>)}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className='bg-polycgray  border rounded-xl' value="item-3">
                <AccordionTrigger className=' px-3 ' >09:00 </AccordionTrigger>
                <AccordionContent className='bg-white border-t flex items-center text-center gap-3 w-full'>
                  {time.map(time => <Button
                    className='bg-polycbtn hover:bg-polycbtnhover hover:text-white focus:bg-polycbtnhover m-1 px-4 text-white'
                    variant={'ghost'}> {time} </Button>)}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className='bg-polycgray  border rounded-xl' value="item-4">
                <AccordionTrigger className=' px-3 ' >09:00 </AccordionTrigger>
                <AccordionContent className='bg-white border-t flex items-center text-center gap-3 w-full'>
                  {time.map(time => <Button
                    className='bg-polycbtn hover:bg-polycbtnhover hover:text-white focus:bg-polycbtnhover m-1 px-4 text-white'
                    variant={'ghost'}> {time} </Button>)}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="12.12.2025">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem className='bg-polycgray  border rounded-xl' value="item-1">
                <AccordionTrigger className=' px-3 ' >10:00 </AccordionTrigger>
                <AccordionContent className='bg-white border-t flex items-center text-center gap-3 w-full'>
                  {time2.map(time => <Button
                    className='bg-polycbtn hover:bg-polycbtnhover hover:text-white focus:bg-polycbtnhover m-1 px-4 text-white'
                    variant={'ghost'}> {time} </Button>)}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className='bg-polycgray  border rounded-xl' value="item-2">
                <AccordionTrigger className=' px-3 ' >10:00 </AccordionTrigger>
                <AccordionContent className='bg-white border-t flex items-center text-center gap-3 w-full'>
                  {time2.map(time => <Button
                    className='bg-polycbtn hover:bg-polycbtnhover hover:text-white focus:bg-polycbtnhover m-1 px-4 text-white'
                    variant={'ghost'}> {time} </Button>)}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className='bg-polycgray  border rounded-xl' value="item-3">
                <AccordionTrigger className=' px-3 ' >10:00 </AccordionTrigger>
                <AccordionContent className='bg-white border-t flex items-center text-center gap-3 w-full'>
                  {time2.map(time => <Button
                    className='bg-polycbtn hover:bg-polycbtnhover hover:text-white focus:bg-polycbtnhover m-1 px-4 text-white'
                    variant={'ghost'}> {time} </Button>)}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className='bg-polycgray  border rounded-xl' value="item-4">
                <AccordionTrigger className=' px-3 ' >10:00 </AccordionTrigger>
                <AccordionContent className='bg-white border-t flex items-center text-center gap-3 w-full'>
                  {time2.map(time => <Button
                    className='bg-polycbtn hover:bg-polycbtnhover hover:text-white focus:bg-polycbtnhover m-1 px-4 text-white'
                    variant={'ghost'}> {time} </Button>)}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
