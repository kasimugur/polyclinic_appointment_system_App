'use client'

import React, { useState } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import {
  Button
} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAppointmentContext } from '../context/AppointmentContext'

interface Department {
  id: string
  name: string
  description?: string
}

interface Hospital {
  id: string
  name: string
  city: string
  district: string
}

interface Doctor {
  id: string
  fullName: string
  hospitalId: string
  departmentId: string
}

export default function Dashboard() {
  const {doctor,hospital,depart} =useAppointmentContext()
  const [departments, setDepartments] = useState<Department[]>([])
  const [hospitals, setHospitals] = useState<Hospital[]>([])
  const [doctors, setDoctors] = useState<Doctor[]>([])

  // Department form
  const departmentForm = useForm({
    defaultValues: {
      departmentName: '',
      departmentDescription: '',
    },
  })

  // Hospital form
  const hospitalForm = useForm({
    defaultValues: {
      hospitalName: '',
      city: '',
      district: '',
    },
  })

  // Doctor form
  const doctorForm = useForm({
    defaultValues: {
      fullName: '',
      hospitalId: '',
      departmentId: '',
    },
  })

  // Handlers
  const onSubmitDepartment = (data: any) => {
    setDepartments((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: data.departmentName, description: data.departmentDescription },
    ])
    departmentForm.reset()
  }

  const onSubmitHospital = (data: any) => {
    setHospitals((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: data.hospitalName, city: data.city, district: data.district },
    ])
    hospitalForm.reset()
  }

  const onSubmitDoctor = (data: any) => {
    setDoctors((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        fullName: data.fullName,
        hospitalId: data.hospitalId,
        departmentId: data.departmentId,
      },
    ])
    doctorForm.reset()
  }

  return (
    <div className="flex  md:flex-row min-h-screen bg-gray-100 p-4 max-w-full">
      
        {/* Forms */}
        <section className="flex-1 bg-white rounded-md shadow p-6 max-h-[600px] overflow-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin panel</h1>
          <Tabs defaultValue="department" className=" flex  max-w-3xl ">
            <TabsList  className='gap-3 m-2 basis-1/3 flex flex-col'>
              <TabsTrigger className="w-full text-left" value="department">Departman Ekle</TabsTrigger>
              <TabsTrigger className="w-full text-left" value="hospital">Hastane Ekle</TabsTrigger>
              <TabsTrigger className="w-full text-left" value="doctor">Doktor Ekle</TabsTrigger>
            </TabsList>

            {/* Department Form */}
            <TabsContent value="department" className="mt-6 space-y-4 basis-2/3">
              <Form {...departmentForm}>
                <form onSubmit={departmentForm.handleSubmit(onSubmitDepartment)} className="space-y-4">
                  <FormField
                    control={departmentForm.control}
                    name="departmentName"
                    rules={{ required: 'Departman adı gerekli' }}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Departman Adı</FormLabel>
                        <FormControl>
                          <Input placeholder="Örn: Kardiyoloji" {...field} />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />


                  <Button type="submit" className="w-full">
                    Departman Ekle
                  </Button>
                </form>
              </Form>
            </TabsContent>

            {/* Hospital Form */}
            <TabsContent value="hospital" className="mt-6 space-y-4 basis-2/3">
              <Form {...hospitalForm}>
                <form onSubmit={hospitalForm.handleSubmit(onSubmitHospital)} className="space-y-4">
                  <FormField
                    control={hospitalForm.control}
                    name="hospitalName"
                    rules={{ required: 'Hastane adı gerekli' }}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Hastane Adı</FormLabel>
                        <FormControl>
                          <Input placeholder="Örn: Şişli Etfal" {...field} />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={hospitalForm.control}
                    name="city"
                    rules={{ required: 'Şehir zorunlu' }}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Şehir</FormLabel>
                        <FormControl>
                          <Input placeholder="Örn: İstanbul" {...field} />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={hospitalForm.control}
                    name="district"
                    rules={{ required: 'İlçe zorunlu' }}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>İlçe</FormLabel>
                        <FormControl>
                          <Input placeholder="Örn: Beşiktaş" {...field} />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Hastane Ekle
                  </Button>
                </form>
              </Form>
            </TabsContent>

            {/* Doctor Form */}
            <TabsContent value="doctor" className="mt-6 space-y-4 basis-2/3">
              <Form {...doctorForm}>
                <form onSubmit={doctorForm.handleSubmit(onSubmitDoctor)} className="space-y-4">
                  <FormField
                    control={doctorForm.control}
                    name="fullName"
                    rules={{ required: 'Ad Soyad gerekli' }}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Ad Soyad</FormLabel>
                        <FormControl>
                          <Input placeholder="Örn: Dr. Ahmet Yılmaz" {...field} />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={doctorForm.control}
                    name="hospitalId"
                    rules={{ required: 'Hastane seçimi gerekli' }}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Hastane Seç</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue=""
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Hastane seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            {hospitals.length > 0 ? (
                              hospitals.map((h) => (
                                <SelectItem key={h.id} value={h.id}>
                                  {h.name}
                                </SelectItem>
                              ))
                            ) : (
                              <SelectItem value="" disabled>
                                Önce hastane ekleyin
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={doctorForm.control}
                    name="departmentId"
                    rules={{ required: 'Departman seçimi gerekli' }}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Departman Seç</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue=""
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Departman seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.length > 0 ? (
                              departments.map((d) => (
                                <SelectItem key={d.id} value={d.id}>
                                  {d.name}
                                </SelectItem>
                              ))
                            ) : (
                              <SelectItem value="" disabled>
                                Önce departman ekleyin
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Doktor Ekle
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </section>

        {/* bilgiler */}
        <section className="w-full md:w-80 bg-white rounded-md shadow p-6 overflow-auto max-h-[600px]">
          {/* Departments */}
          <h3 className="text-lg font-semibold mb-3 border-b pb-1">Departmanlar</h3>
          {depart.length === 0 ? (
            <p className="text-muted-foreground">Henüz departman eklenmedi.</p>
          ) : (
            <ul className="list-disc pl-5 max-h-36 overflow-auto">
              {depart.map((d) => (
                <li key={d.DepartmentID} title={d.DepartmentName}>
                  {d.DepartmentName}
                </li>
              ))}
            </ul>
          )}

          {/* Hospitals */}
          <h3 className="text-lg font-semibold mt-6 mb-3 border-b pb-1">Hastaneler</h3>
          {hospital.length === 0 ? (
            <p className="text-muted-foreground">Henüz hastane eklenmedi.</p>
          ) : (
            <ul className="list-disc pl-5 max-h-36 overflow-auto">
              {hospital.map((h) => (
                <li key={h.hospitalId} title={`${h.county} - ${h.district}`}>
                  {h.hospitalName}
                </li>
              ))}
            </ul>
          )}

          {/* Doctors */}
          <h3 className="text-lg font-semibold mt-6 mb-3 border-b pb-1">Doktorlar</h3>
          {doctor.length === 0 ? (
            <p className="text-muted-foreground">Henüz doktor eklenmedi.</p>
          ) : (
            <ul className="list-disc pl-5 max-h-36 overflow-auto">
              {doctor.map((doc) => {
                const hospit = hospital.find((h) => h.hospitalId === doc.HospitalId)
                const department = depart.find((d) => d.DepartmentID === doc.DepartmentID)
                return (
                  <li key={doc.DoctorID} title={`Hastane: ${hospit?.hospitalName || '-'} | Departman: ${department?.DepartmentName || '-'}`}>
                    {doc.FullName}
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      
    </div>
  )
}
