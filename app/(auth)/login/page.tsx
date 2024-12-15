'use client'
import Image from 'next/image'
import React from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const formSchema = z.object({
  email: z.string().email({
    message: "Invaild Email",
  }),
  password: z.string().min(5, {
    message: "Passwo must be at least 5 characters.",
  }),
})
export default function LoginPage() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:"",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
  
    console.log(values)
  }
  return (
    <>
      <div className='flex'  >
        <div className='basis-2/4 mt-8' >
          <h1 className='text-center text-2xl'> poliknlik randevu sistemi</h1>
          <div className='flex justify-center text-center mt-16' >
          <Form  {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField 
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input className='w-[518px]' placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input className='w-[518px]' type='password' placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex flex-col space-y-4'>

              <Button className='w-[518px] bg-green-400 hover:bg-green-300' type="submit">Giriş</Button>
              <Link href={'/register'} > 
              <Button className='w-[518px] bg-blue-400 hover:bg-blue-300'>Kayıt ol</Button>
              </Link>
              </div>
            </form>
          </Form>
            
          </div>
        
        </div>
        <div className='basis-2/4' >
          <Image className='w-full min-h-screen object-cover' src='/login.jpg' width={1080} height={1080} alt='loginİmage' />
        </div>
      </div>
    </>
  )
}
