"use client"

import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Bell, ChevronDown, CircleUser, LogOut, MessageSquare, Star, User } from 'lucide-react'
import Link from 'next/link'
import { useSiteContext } from '../context/SiteContext'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const router = useRouter()
  const { setIsOpen } = useSiteContext()
  const { users, userId } = useSiteContext()
  const userName = users.filter(e => e.UserID === userId).map(name => name.FullName)

  const handleClick = () => {
    setIsOpen(false)
    router.push('/login')
  }
  return (
    <Menubar className=''>
      <MenubarMenu>
        <MenubarTrigger className='px-4 w-36 h-8'><User /> {userName} <ChevronDown /> </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Hesap Bilgileri </MenubarSubTrigger>
            <MenubarSubContent >
              <MenubarItem><CircleUser className='size-5 mx-3' /> <Link className='w-full' href={'/personelInfo'}>Kişisel Bilgiler</Link></MenubarItem>
              {/* <MenubarSeparator />
              <MenubarItem><MessageSquare className='size-5 mx-3' /> İletişim Bilgileri</MenubarItem> */}
              <MenubarSeparator />
              <MenubarItem><Bell className='size-5 mx-3' /> Bilgilendirme Tercihleri</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            <Link href={'/myappointment'}> Randevularım</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Favorilerim<MenubarShortcut><Star size={20} /></MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem onClick={handleClick}>Çıkış <MenubarShortcut><LogOut size={20} /></MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
