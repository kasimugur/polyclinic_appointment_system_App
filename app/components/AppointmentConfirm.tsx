'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from '@/components/ui/button'
import { useAppointmentContext } from '../context/AppointmentContext'

interface AppointmentConfirmPage {
  time: string
  confirmOpen: boolean
  setConfirmOpen: React.Dispatch<React.SetStateAction<boolean>>
  date: string;
}
export default function AppointmentConfirm({ time, date, confirmOpen, setConfirmOpen }: AppointmentConfirmPage) {
  const { sentData } = useAppointmentContext()
  return (
    <Dialog onOpenChange={setConfirmOpen} open={confirmOpen}>
      <DialogContent className=" sm:max-w-[518px] ">
        <DialogHeader className='border-b px-6 py-4 items-start'>
          <DialogTitle>Randevu Onayla</DialogTitle>
        </DialogHeader>
        <div className="flex border rounded-md">
          <div className="w-32 min-w-32 border-r bg-polycgray">
            <div className="h-14 px-4 py-1 border-b font-medium">Randevu Zamanı</div>
            <div className="h-14 px-4 py-1 border-b font-medium">Randevu Türü</div>
            <div className="h-14 px-4 py-1 border-b font-medium">Hastane</div>
            <div className="h-14 px-4 py-1 border-b font-medium">Poliklinik Adı</div>
            <div className="h-14 px-4 py-1 border-b font-medium">Hekim</div>
            <div className="h-14 px-4 py-1 font-medium">Randevu Sahibi</div>
          </div>
          <div className="flex-1">
            <div className="h-14 px-4 py-1 border-b">{date} {time} </div>
            <div className="h-14 px-4 py-1 border-b text-red-600">Muayene</div>
            <div className="h-14 px-4 py-1 border-b">KARAMAN EĞİTİM VE ARAŞTIRMA HASTANESİ</div>
            <div className="h-14 px-4 py-1 border-b">İç Hastalıkları (Dahiliye)</div>
            <div className="h-14 px-4 py-1 border-b">İSMAİL CEM YEŞİLOVA</div>
            <div className="h-14 px-4 py-1">KASIM UĞUR</div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setConfirmOpen(false)} className='bg-polycbtn text-white' type="submit">Randevu Onayla</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
