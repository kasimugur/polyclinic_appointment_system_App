'use client'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import Profile from './Profile'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSiteContext } from '../context/SiteContext'

export default function Header() {
  const { isOpen } = useSiteContext()
  return (
    <>
      {isOpen && <div className='px-5 h-14 pt-2 shadow-sm shadow-gray-100   bg-white flex sticky top-0 items-center justify-around '>
        <Link href={'/'} >
          <div className='text-sm flex-col flex '>
            <div className="flex gap-1">
              <h1>Merkezi </h1>
              <h1 className='text-[#A7161A] font-bold'>Polikinlik</h1>
            </div>
            <div className="flex gap-1">
              <h1 className='font-bold text-[#358481]'>Randevu </h1>
              <h1>Sistemi</h1>
            </div>
          </div>
        </Link>
        <div className='w-2/5 relative flex items-center '>
          <Input />
          <Search className=' mr-1 absolute right-0' />
        </div>
        {isOpen && <Profile />}
      </div>
      }
    </>
  )
}
