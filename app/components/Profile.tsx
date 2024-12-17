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

export default function Profile() {
  return (
    <Menubar className=''>
      <MenubarMenu>
        <MenubarTrigger className='px-4 w-36 h-8'><User /> Kasımuğur <ChevronDown /> </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Hesap Bilgileri </MenubarSubTrigger>
            <MenubarSubContent >
              <MenubarItem><CircleUser className='size-5 mx-3' /> Kişisel Bilgiler</MenubarItem>
              <MenubarSeparator />
              <MenubarItem><MessageSquare className='size-5 mx-3' /> İletişim Bilgileri</MenubarItem>
              <MenubarSeparator />
              <MenubarItem><Bell className='size-5 mx-3' /> Bilgilendirme Tercihleri</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />

          <MenubarSub>
            <MenubarSubTrigger>Randevu Bilgileri</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Randevularım</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Geçmiş Randevularım</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            Favorilerim<MenubarShortcut><Star size={20}/></MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Çıkış <MenubarShortcut><LogOut size={20}/></MenubarShortcut></MenubarItem>
          
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
