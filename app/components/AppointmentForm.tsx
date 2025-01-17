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
import { useAppointmentContext } from '../context/AppointmentContext'

const formSchema = z.object({
  county: z.string().min(1, {
    message: "Lütfen il seçiniz.",
  }),

  district: z.string().min(1, {
    message: "Lütfen ilçe seçiniz.",
  }),

  departments: z.string().min(1, {
    message: "Lütfen departman seçiniz.",
  }),

  hospitalname: z.string().min(1, {
    message: "Lütfen hastane seçiniz.",
  }),

  doctors: z.string().min(1, {
    message: "Lütfen doktor seçiniz.",
  }),
});
export default function AppointmentForm() {
  const { hospital, doctor, depart, setSentData } = useAppointmentContext()

  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      county: "",
      district: "",
      hospitalname: "",
      departments: "",
      doctors: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("gönderilen bilgi", values)
    // await setSentData(values)
    setSentData([])
    await setSentData(prevData => [...prevData, values]);
    router.push('/appointments')
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
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.setValue("district", "");
                      form.setValue("hospitalname", "");
                      form.setValue("departments", "");
                      form.setValue("doctors", "");
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="İl seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {hospital.map((item) => (
                        <SelectItem key={item.county} value={item.county}>
                          {item.county}
                        </SelectItem>
                      ))}
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
                <FormLabel>İlçe</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.setValue("hospitalname", "");
                      form.setValue("departments", "");
                      form.setValue("doctors", "");
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="İlçe seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {hospital
                        .filter((item) => item.county === form.watch("county"))
                        .map((filteredItem) => (
                          <SelectItem key={filteredItem.district} value={filteredItem.district}>
                            {filteredItem.district}
                          </SelectItem>
                        ))}
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
                <FormLabel>Hastane</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.setValue("departments", "");
                      form.setValue("doctors", "");
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Hastane seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {hospital
                        .filter((item) => item.district === form.watch("district"))
                        .map((filteredItem) => (
                          <SelectItem key={filteredItem.hospitalId} value={String(filteredItem.hospitalId)}>
                            {filteredItem.hospitalName}
                          </SelectItem>
                        ))}
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
                <FormLabel>Departman</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.setValue("doctors", "");
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Departman seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctor
                        .filter(doc => String(doc.HospitalId) === (form.watch("hospitalname"))) // Seçilen hastaneye ait doktorları filtrele
                        .map(doc => doc.DepartmentID) // Departman ID'lerini al
                        .filter((value, index, self) => self.indexOf(value) === index) // Tekrar edenleri kaldır
                        .map((departmentId) => {
                          const department = depart.find(dep => dep.DepartmentID === departmentId); // Departman bilgilerini bul
                          return (
                            <SelectItem key={departmentId} value={String(departmentId)}>
                              {department?.DepartmentName}
                            </SelectItem>
                          );
                        })}
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
                <FormLabel>Doktor</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Doktor seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctor
                        .filter(doc =>
                          doc.HospitalId === Number(form.watch("hospitalname")) &&
                          doc.DepartmentID === Number(form.watch("departments"))
                        )
                        .map((filteredDoctor) => (
                          <SelectItem key={filteredDoctor.DoctorID} value={filteredDoctor.FullName}>
                            {filteredDoctor.FullName}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
