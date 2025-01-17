
// Kullanıcı bilgileri
export interface User {
  UserID: number;
  FullName: string;
  Email: string;
  PasswordHash: string;
  Role: 'patient' | 'doctor' | 'admin';
  CreatedAt: string; // 'YYYY-MM-DDTHH:mm:ss' şeklinde tarih zamanı
}

// Bölüm bilgileri
export interface Department {
  DepartmentID: number;
  DepartmentName: string;
  CreatedAt: string; // 'YYYY-MM-DDTHH:mm:ss' şeklinde tarih zamanı
}

// Hastane bilgileri
export interface Hospital {
  hospitalId: number;
  hospitalName: string;
  county: string;
  district: string;
  createdAt: string; // 'YYYY-MM-DDTHH:mm:ss' şeklinde tarih zamanı
  updatedAt: string; // Güncellenme zamanı
}

// Doktor bilgileri
export interface Doctor {
  DoctorID: number;
  FullName: string;
  DepartmentID: number;
  Contact?: string;
  HospitalId: number;
  CreatedAt: string;
}

// Randevu bilgileri
interface Appointment {
  AppointmentID: number;
  UserID: number;
  DoctorID: number;
  DepartmentID: number;
  hospitalId: number;
  AppointmentDate: string; // 'YYYY-MM-DD' şeklinde tarih
  AppointmentTime: string; // 'HH:mm:ss' şeklinde zaman
  Status: 'Aktif' | 'Geçmiş Randevu' | 'İptal Edildi';
  CreatedAt: string; // 'YYYY-MM-DDTHH:mm:ss' şeklinde tarih zamanı
}

export interface myAppointment {
  AppointmentDate: string
  AppointmentID: number
  AppointmentTime: string
  DepartmentName: string
  DoctorName: string
  HospitalName: string
  Status: string
}
export interface ValuesData {
  county: string;
  district: string;
  departments: string;
  hospitalname: string;
  doctors: string;
}

export interface PolikinlikdbType {
  users: User[];
  departments: Department[];
  hospitals: Hospital[];
  doctors: Doctor[];
  appointments: Appointment[];

}


