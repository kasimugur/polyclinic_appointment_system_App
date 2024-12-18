import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CalendarHeart, Hospital } from 'lucide-react'

export default function Hero() {
  return (
    <div className="p-[25]  ">
      <div className=" flex p-4 rounded-md bg-white  space-x-6">
        <div className="basis-1/3">
          <div className="flex flex-col space-y-6">
            {/* <Button className="bg-[#358481] hover:bg-[#57b1ae] h-36 md:h-48 " >
              <Dialog >
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </Button> */}
            <Button className='bg-[#A7161A] hover:bg-[#c54c50] h-36 md:h-48 rounded-xl  shadow-sm' >
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
          <div className="flex gap-1 ">
            <Link href={'#'} className='border-x-2 border-y-2 p-1 rounded-sm  focus:border-b-0' >randevularım</Link>
            <Link href={'#'} className='border-x-2 border-y-2 p-1 rounded-sm focus:border-b-0' >geçmiş Randevular</Link>
          </div>
          <div className="flex flex-col justify-center items-center h-72 ">
            <CalendarHeart size={100} color='gray' />
            aktif Randevunuz yok
          </div>

          <Button className='bg-[#e7e7e7] text-gray-400 w-full  hover:bg-[#e7e7e7] mt-10 cursor-no-drop'>Tümünü göster</Button>
        </div>
      </div>
    </div>
  )
}
