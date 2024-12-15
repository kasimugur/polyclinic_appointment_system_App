'use client'
import Image from 'next/image'
import React from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
  username: z.string().min(3, {
    message: "UserName must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invaild Email",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
  role: z.enum(['patient', 'doctor', 'admin'], {
    message: "please select a valid role."
  })

})
export default function LoginPage() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "patient",
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
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>kullanıcı adı</FormLabel>
                      <FormControl>
                        <Input className='w-[518px]' placeholder="kullanıcıadı" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className='w-[518px]' placeholder="email@test.row" {...field} />
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
                        <Input className='w-[518px]' type='password' placeholder="şifre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[518px]">
                            <SelectValue placeholder="Role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="patient">Hasta</SelectItem>
                            <SelectItem value="doctor">Doktor</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='flex flex-col space-y-4'>

                  <Link href={'/login'} >
                    <Button className='w-[518px] bg-green-400 hover:bg-green-300'>Giriş</Button>
                  </Link>
                  <Button className='w-[518px] bg-blue-400 hover:bg-blue-300' type="submit">Kayıt ol</Button>
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
