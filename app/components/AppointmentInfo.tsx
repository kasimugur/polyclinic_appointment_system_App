'use client'
import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Info } from 'lucide-react'
import AppointmentConfirm from './AppointmentConfirm'

interface AppointmentInfoPageProps {
  time: string;
  date: string;
  openTime: boolean;
  setOpenTime: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AppointmentInfo({ time, date, openTime, setOpenTime }: AppointmentInfoPageProps) {
  const [open, setOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  
  console.log(confirmOpen)
  console.log("open dialog", open)
  return (
    <>
      <AlertDialog open={openTime} onOpenChange={setOpenTime} >
        <AlertDialogTrigger>{time}</AlertDialogTrigger>
        <AlertDialogContent className='w-96'>
          <AlertDialogHeader >
            <AlertDialogTitle className='flex'><Info /> Bilgi</AlertDialogTitle>
            <AlertDialogDescription >
              ÖNEMLİ!
              Kaydet tuşuna bastığınızda,
              randevunuz otomatik olarak onaylanmış olacak.
              Eğer gelemeyecekseniz, randevunuzu
              en geç {date} saat 06:00’ye kadar
              iptal etmelisiniz .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel >Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => {
              setOpenTime(false)
              setConfirmOpen(true)
            }} className='bg-polycbtn hover:bg-polycbtnhover'> Ok  </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AppointmentConfirm setConfirmOpen={setConfirmOpen} date={date} confirmOpen={confirmOpen} time={time} />
    </>
  )
}
