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
  county: z.string().min(3, {
    message: "İl must be at least 3 characters.",
  }),

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
  const { hospital, doctor, depart } = useAppointmentContext()

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
  console.log(hospital.filter(item => item.county))
  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }
  console.log("Seçilen hastane:", form.watch("hospitalname"));
  console.log(
    "Bulunan hospitalId:",
    hospital.find((h) => h.hospitalName === form.watch("hospitalname"))?.hospitalId
  );
  console.log("Departmanlar:", depart);
  console.log("Doktorlar:", doctor);

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
                          <SelectItem key={filteredItem.hospitalId} value={filteredItem.hospitalName}>
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
                      form.setValue("doctors", ""); // Doktor seçim alanını temizle
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Departman seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {depart
                        .filter((item) =>
                          doctor.some((doc) => {
                            // Hastane adını seçerek hospitalId'yi bul
                            const selectedHospitalId = hospital.find(
                              (h) => h.hospitalName === form.watch("hospitalname")
                            )?.hospitalId;

                            // Departman ve hastane eşleşmelerini kontrol et
                            return (
                              (doc.DepartmentID) === (item.DepartmentID) &&
                              (doc.hospitalId) === (selectedHospitalId)
                            );
                          })
                        )
                        .map((filteredDepart) => (
                          <SelectItem
                            key={filteredDepart.DepartmentID}
                            value={String(filteredDepart.DepartmentID)}
                          >
                            {filteredDepart.DepartmentName}
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
            name="doctors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Doktor</FormLabel>
                <FormControl>
                  <Select onValueChange={(value) => field.onChange(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Doktor seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctor
                        .filter(
                          (doc) =>
                            doc.hospitalId ===
                            hospital.find((h) => h.hospitalName === form.watch("hospitalname"))?.hospitalId &&
                            doc.DepartmentID === Number(form.watch("departments"))
                        )
                        .map((filteredDoc) => (
                          <SelectItem key={filteredDoc.DoctorID} value={filteredDoc.FullName}>
                            {filteredDoc.FullName}
                          </SelectItem>
                        ))}

                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />



          <Button onClick={() => router.push('/appointments')} type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
