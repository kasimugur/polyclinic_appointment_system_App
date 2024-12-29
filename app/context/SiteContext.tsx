'use client'
import { User } from '@/constans';
import axios from 'axios';
import React, { createContext, useEffect, ReactNode, useState, useContext } from 'react';


interface SiteContextProps {
  users: User[];
  setUsers?: React.Dispatch<React.SetStateAction<User[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SiteContext = createContext<SiteContextProps | undefined>(undefined);
export const SiteContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([])
  const [isOpen, setIsOpen] = useState(() => {
    const saved = sessionStorage.getItem('isOpen');
    return saved ? JSON.parse(saved) : false; // JSON.parse ile boolean değeri alıyoruz
  });
  
  // Durum değiştiğinde sessionStorage'a kaydediyoruz
  useEffect(() => {
    sessionStorage.setItem('isOpen', JSON.stringify(isOpen)); // JSON.stringify ile saklıyoruz
  }, [isOpen]);

  const usersData = async () => {
    try {
      const response = await axios.get('/api/users')
      console.log(response.data)
      setUsers(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('kullanıcı bullunamadı:', error.response?.data.error || error.message)
      } else {
        console.error('kullanıcı bulunamadı ', error)
      }
    }
  }
  useEffect(() => {
    usersData()
  }, []);

  console.log(users)
  const data = {
    users,
    isOpen,
    setIsOpen
  };

  return (
    <SiteContext.Provider value={data}>
      {children}
    </SiteContext.Provider>
  );
};


export const useSiteContext = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSiteContext must be used within a RoutesProvider");
  }
  return context;
};