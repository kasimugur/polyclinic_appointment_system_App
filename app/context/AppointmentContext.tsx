'use client'
import { Department, Doctor, Hospital } from '@/constans'
import axios from 'axios'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface AppointmentContextProps {
  hospital: Hospital[];
  doctor: Doctor[];
  depart: Department[];
}

const AppointmentContext = createContext<AppointmentContextProps | undefined>(undefined)

export const AppointmentContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hospital, setHospital] = useState<Hospital[]>([])
  const [doctor, setDoctor] = useState<Doctor[]>([])
  const [depart, setDepart] = useState<Department[]>([])
  const hospitals = async () => {
    try {
      const response = await axios.get('/api/hospital')
      console.log(response.data)
      setHospital(response.data)
    } catch (error) {
      console.error('hastane bilgileri bulunamadı', error)
    }
  }

  const departments = async () => {
    try {
      const response = await axios.get('/api/department')
      console.log(response.data)
      setDepart(response.data)
    } catch (error) {
      console.error('deparment bilgileri bulunamadı', error)
    }
  }

  const doctors = async () => {
    try {
      const response = await axios.get('/api/doctor')
      console.log(response.data)
      setDoctor(response.data)
    } catch (error) {
      console.error('doctor bilgileri bulunamadı', error)
    }
  }

  useEffect(() => {
    hospitals()
    departments()
    doctors()
  }, [])

  const data = {
    hospital,
    doctor,
    depart
  }
  return (
    <AppointmentContext.Provider value={data}>
      {children}
    </AppointmentContext.Provider>
  )
}


export const useAppointmentContext = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointmentContext must be used within a RoutesProvider");
  }
  return context;
};