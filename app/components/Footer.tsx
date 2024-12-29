'use client'
import React from 'react'
import { useSiteContext } from '../context/SiteContext'

export default function Footer() {
  const { isOpen } = useSiteContext()
  return (
    <>
      {
        isOpen &&
        < footer className='flex flex-col justify-center items-center mb-8'>
          < p > Merkezi Polikinlik Randevu Sistemi</p >
          <p> Copyright <span>2024</span> Tüm Hakları Saklıdır.</p>
        </footer >}
    </>
  )
}
