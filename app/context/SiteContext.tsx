'use client'
import { myAppointment, User } from '@/constans';
import axios from 'axios';
import React, { createContext, useEffect, ReactNode, useState, useContext } from 'react';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useRouter } from 'next/navigation';

interface SiteContextProps {
  users: User[];
  setUsers?: React.Dispatch<React.SetStateAction<User[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  userAppointment?: myAppointment[];
  setUserAppointment: React.Dispatch<React.SetStateAction<myAppointment[]>>
}
const SiteContext = createContext<SiteContextProps | undefined>(undefined);
export const SiteContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('isOpen');
      return saved ? JSON.parse(saved) : false;
    }
  });
  const [userId, setUserId] = useState<number>(0)

const [userAppointment, setUserAppointment] = useState<myAppointment[]>([]) 
console.log(userAppointment)
async function fetchAppointments(userIdA:number) {
  axios.get('/api/appointment', {
    params: {
      userId: userIdA, // Sorgu parametresi
    },
  })
  .then(response => {
    console.log('Randevu Bilgileri:', response.data);
    setUserAppointment(response.data)
  })
  .catch(error => {
    console.error('Hata:', error.response?.data || error.message);
  });
}

  const userJwtToken = () => {
    const token = sessionStorage.getItem('jwtToken');
    if (token) {
      try {
        const decoded: JwtPayload & { email?: string, id: number } = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp) {
          if (decoded.exp < currentTime) {
            console.log("Token süresi dolmuş.");
            sessionStorage.removeItem('jwtToken');
          } else {
            console.log("Token geçerli:", decoded);
            setUserId(decoded.id)
            fetchAppointments(decoded.id)
            // setUserInfo(decoded);
          }
        }

      } catch (error) {
        console.error("Token decode hatası:", error);
      }
    }
  }
  const usersData = async () => {
    try {
      const response = await axios.get('/api/users')
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
    sessionStorage.setItem('isOpen', JSON.stringify(isOpen));
    if (isOpen) {
      router.push('/')
      
    } else {
      router.push('/login')
    }
  }, [isOpen]);

  
  useEffect(() => {
    userJwtToken()
    usersData()
  }, []);

  const data = {
    users,
    isOpen,
    setIsOpen,
    setUserId,
    userId
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