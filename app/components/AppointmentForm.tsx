'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const formSchema = z.object({
  county: z.string().min(3, {
    message: "İl must be at least 3 characters.",
  }),
  // district: z.enum(['patient', 'doctor', 'admin'], {
  //   message: "please select a valid role."
  // })

  district: z.string().min(3, {
    message: "İl must be at least 3 characters.",
  }),
  departments: z.string().min(3, {
    message: "İl must be at least 3 characters.",
  }),
  hospitalname: z.string().min(3, {
    message: "İl must be at least 3 characters.",
  }),
  doctors: z.string().min(3, {
    message: "İl must be at least 3 characters.",
  }),
})
export default function AppointmentForm() {
  
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      county: "",
      district: "",
      departments: "",
      hospitalname: "",
      doctors: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (

    <div className="bg-white p-2 transition duration-500">
      <Button onClick={() => router.push('/')} className='font-sans  text-lg' variant={'ghost'}><ArrowLeft className='mr-1' size={16} />  Randevu Ara</Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="county"
            render={({ field }) => (
              <FormItem>
                <FormLabel>İl</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-full">
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
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>İlçe:</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-full">
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
          <FormField
            control={form.control}
            name="departments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Klinik</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-full">
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

          <FormField
            control={form.control}
            name="hospitalname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>hastane</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-full">
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
          <FormField
            control={form.control}
            name="doctors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hekim</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-full">
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
          <Button onClick={()=> router.push('/appointments')} type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
