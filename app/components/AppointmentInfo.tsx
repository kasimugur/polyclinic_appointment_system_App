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

interface AppointmentInfoPage {
  time: string
}

export default function AppointmentInfo({ time }: AppointmentInfoPage) {
  const [open, setOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const handleClick = (time: string) => {

    return <AppointmentConfirm setConfirmOpen={setConfirmOpen} confirmOpen={confirmOpen} time={time} />
  }
console.log(confirmOpen)
console.log(open)
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen} >
        <AlertDialogTrigger>{time}</AlertDialogTrigger>
        <AlertDialogContent className='w-96'>
          <AlertDialogHeader >
            <AlertDialogTitle className='flex'><Info /> Bilgi</AlertDialogTitle>
            <AlertDialogDescription >
              ÖNEMLİ!
              Kaydet tuşuna bastığınızda,
              randevunuz otomatik olarak onaylanmış olacak.
              Eğer gelemeyecekseniz, randevunuzu
              en geç 24.12.2024 saat 20:00’ye kadar
              iptal etmelisiniz .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel >Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => {
              setOpen(false)
              setConfirmOpen(true)
              // handleClick(time)
            }} className='bg-polycbtn hover:bg-polycbtnhover'> Ok  </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {confirmOpen && handleClick(time)}
    </>
  )
}
