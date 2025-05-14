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
import axios from 'axios'
import { toast } from '@/hooks/use-toast'
import { useSiteContext } from '../context/SiteContext'
import { LucideLogOut } from 'lucide-react'


export default function Dashboard() {
  const { doctor, hospital, depart } = useAppointmentContext()
  const { setOpenDash } = useSiteContext()
  // Department form
  const departmentForm = useForm({
    defaultValues: {
      DepartmentName: '',  // API ile tutarlı isimlendirme
    },
  });
  // console.log(departments)
  // Hospital form
  const hospitalForm = useForm({
    defaultValues: {
      hospitalName: '',
      county: '',
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

  // depart
  const onSubmitDepartment = async (data: any) => {
    console.log("Gönderilen department name", data);

    try {
      const response = await axios.post('/api/department', {
        DepartmentName: data.DepartmentName.trim() // boşlukları temizle
      });

      console.log('Departman ekleme yanıtı:', response.data);

      toast({
        variant: 'successful',
        title: 'Sn. admin',
        description: 'Departman başarıyla eklenmiştir.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Sn. admin',
        description: 'Departman eklenemedi. Lütfen tekrar deneyin.',
      });

      if (axios.isAxiosError(error)) {
        const apiData = error.response?.data;
        const msg = apiData && typeof apiData === 'object' && 'error' in apiData
          ? (apiData as any).error
          : error.message;

        console.error('Departman ekleme hatası:', msg);
      } else {
        console.error('Beklenmeyen hata:', error);
      }
    }

    departmentForm.reset();
  };

  //  hastane
  const onSubmitHospital = async (data: any) => {
    console.log("Gönderilen hastane verisi:", data);

    try {
      const response = await axios.post('/api/hospital', {
        hospitalName: data.hospitalName.trim(),
        county: data.county.trim(),
        district: data.district.trim(),
      });

      console.log('Hastane ekleme yanıtı:', response.data);

      toast({
        variant: 'successful',
        title: 'Sn. admin',
        description: 'Hastane başarıyla eklenmiştir.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Sn. admin',
        description: 'Hastane eklenemedi. Lütfen tekrar deneyin.',
      });

      if (axios.isAxiosError(error)) {
        const apiData = error.response?.data;
        const msg = apiData && typeof apiData === 'object' && 'error' in apiData
          ? (apiData as any).error
          : error.message;

        console.error('Hastane ekleme hatası:', msg);
      } else {
        console.error('Beklenmeyen hata:', error);
      }
    }

    hospitalForm.reset();
  };
  const onSubmitDoctor = async (data: any) => {
    console.log("Gönderilen doktor verisi:", data);

    // Formdan gelen verileri kontrol edelim
    const fullName = data?.fullName?.trim?.();
    const departmentId = Number(data?.departmentId);
    const hospitalId = Number(data?.hospitalId);

    if (!fullName || !departmentId || !hospitalId) {
      console.error("Eksik alanlar:", { fullName, departmentId, hospitalId });
      toast({
        variant: 'destructive',
        title: 'Eksik bilgi',
        description: 'Lütfen tüm alanları doldurun.',
      });
      return;
    }

    try {
      const response = await axios.post('/api/doctor', {
        FullName: fullName,
        DepartmentID: departmentId,
        HospitalId: hospitalId,
      });

      console.log('Doktor eklendi yanıtı:', response.data);

      toast({
        variant: 'successful',
        title: 'Sn. admin',
        description: 'Doktor başarıyla eklenmiştir.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Sn. admin',
        description: 'Doktor eklenemedi. Lütfen tekrar deneyin.',
      });

      if (axios.isAxiosError(error)) {
        const apiData = error.response?.data;
        const msg = apiData && typeof apiData === 'object' && 'error' in apiData
          ? (apiData as any).error
          : error.message;

        console.error('Doktor ekleme hatası:', msg);
      } else {
        console.error('Beklenmeyen hata:', error);
      }
    }

    doctorForm.reset();
  };

  const handleClickOut = () => {
    setOpenDash(false)
    // router.push('/login')

  }

  return (
    <div className="flex  md:flex-row min-h-screen bg-gray-100 p-4 max-w-full">

      {/* Forms */}
      <section className="flex-1 bg-white rounded-md shadow p-6 max-h-[600px] overflow-auto">
        
        <h1 className="text-2xl font-bold mb-6 text-center">Admin panel </h1>
        <Tabs defaultValue="department" className=" flex  max-w-3xl ">
          
          <TabsList className='gap-3 m-2 basis-1/3 flex flex-col'>
            <TabsTrigger className="w-full text-left data-[state=active]:bg-[#F5F5F5] data-[state=active]:rounded-sm p-2" value="department">Departman Ekle</TabsTrigger>
            <TabsTrigger className="w-full text-left data-[state=active]:bg-[#F5F5F5] data-[state=active]:rounded-sm p-2 bg-white " value="hospital">Hastane Ekle</TabsTrigger>
            <TabsTrigger className="w-full text-left data-[state=active]:bg-[#F5F5F5] data-[state=active]:rounded-sm p-2" value="doctor">Doktor Ekle</TabsTrigger>
            <TabsTrigger className="w-full text-left data-[state=active]:bg-[#F5F5F5] data-[state=active]:rounded-sm p-2" value="hemsire">hemşire Ekle</TabsTrigger>
          </TabsList>

          {/* Department Form */}
          <TabsContent value="department" className="mt-6 space-y-4 basis-2/3">
            <Form {...departmentForm}>
              <form onSubmit={departmentForm.handleSubmit(onSubmitDepartment)} className="space-y-4">
                <FormField
                  control={departmentForm.control}
                  name="DepartmentName"
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
                  name="county"
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
                          {hospital.length > 0 ? (
                            hospital.map((h) => (
                              <SelectItem key={h.hospitalId} value={h.hospitalId.toString()}>
                                {h.hospitalName}
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
                          {depart.length > 0 ? (
                            depart.map((d) => (
                              <SelectItem key={d.DepartmentID} value={d.DepartmentID.toString()}>
                                {d.DepartmentName}
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
          <TabsContent value="hemsire" className="mt-6 space-y-4 basis-2/3">
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
                          {hospital.length > 0 ? (
                            hospital.map((h) => (
                              <SelectItem key={h.hospitalId} value={h.hospitalId.toString()}>
                                {h.hospitalName}
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
                          {depart.length > 0 ? (
                            depart.map((d) => (
                              <SelectItem key={d.DepartmentID} value={d.DepartmentID.toString()}>
                                {d.DepartmentName}
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
        <Button onClick={handleClickOut}  ><LucideLogOut /> Çıkış</Button>
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
