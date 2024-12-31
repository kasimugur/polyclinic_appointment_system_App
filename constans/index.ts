
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
interface Department {
  DepartmentID: number;
  DepartmentName: string;
  CreatedAt: string; // 'YYYY-MM-DDTHH:mm:ss' şeklinde tarih zamanı
}

// Hastane bilgileri
interface Hospital {
  hospitalId: number;
  hospitalName: string;
  county: string;
  district: string;
  createdAt: string; // 'YYYY-MM-DDTHH:mm:ss' şeklinde tarih zamanı
  updatedAt: string; // Güncellenme zamanı
}

// Doktor bilgileri
interface Doctor {
  DoctorID: number;
  FullName: string;
  Specialty: string;
  Contact?: string;
  hospitalId: number;
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
  Status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  CreatedAt: string; // 'YYYY-MM-DDTHH:mm:ss' şeklinde tarih zamanı
}
export interface myAppointment {
  AppointmentDate: string
  AppointmentID: number
  AppointmentTime: string
  DepartmentName: string
  DoctorName: string
  HospitalName: string
}


export interface PolikinlikdbType {
  users: User[];
  departments: Department[];
  hospitals: Hospital[];
  doctors: Doctor[];
  appointments: Appointment[];

}
const polikinlikdb: PolikinlikdbType[] = [
  {
    users: [
      {
        UserID: 1,
        FullName: "Ali Yılmaz",
        Email: "ali@example.com",
        PasswordHash: "hashed_password_123",
        Role: "patient",
        CreatedAt: "2024-12-20T10:00:00"
      },
      {
        UserID: 2,
        FullName: "Dr. Ayşe Kaya",
        Email: "ayse.kaya@hospital.com",
        PasswordHash: "hashed_password_456",
        Role: "doctor",
        CreatedAt: "2024-12-20T11:00:00"
      }
    ],
    departments: [
      {
        DepartmentID: 1,
        DepartmentName: "Kardiyoloji",
        CreatedAt: "2024-12-01T09:00:00"
      },
      {
        DepartmentID: 2,
        DepartmentName: "Dahiliye",
        CreatedAt: "2024-12-01T10:00:00"
      }
    ],
    hospitals: [
      {
        hospitalId: 1,
        hospitalName: "Karaman Devlet Hastanesi",
        county: "Karaman",
        district: "Merkez",
        createdAt: "2024-11-15T08:30:00",
        updatedAt: "2024-11-15T08:30:00"
      },
      {
        hospitalId: 2,
        hospitalName: "Konya Eğitim ve Araştırma Hastanesi",
        county: "Konya",
        district: "Selçuklu",
        createdAt: "2024-11-15T09:00:00",
        updatedAt: "2024-11-15T09:00:00"
      }
    ],
    doctors: [
      {
        DoctorID: 1,
        FullName: "Dr. Ayşe Kaya",
        Specialty: "Kardiyoloji",
        Contact: "05555555555",
        hospitalId: 1,
        CreatedAt: "2024-12-01T09:30:00"
      },
      {
        DoctorID: 2,
        FullName: "Dr. Mehmet Demir",
        Specialty: "Dahiliye",
        Contact: "05555554444",
        hospitalId: 2,
        CreatedAt: "2024-12-01T10:00:00"
      }
    ],
    appointments: [
      {
        AppointmentID: 1,
        UserID: 1,
        DoctorID: 1,
        DepartmentID: 1,
        hospitalId: 1,
        AppointmentDate: "2024-12-22",
        AppointmentTime: "10:30:00",
        Status: "confirmed",
        CreatedAt: "2024-12-20T09:00:00"
      },
      {
        AppointmentID: 2,
        UserID: 1,
        DoctorID: 2,
        DepartmentID: 2,
        hospitalId: 2,
        AppointmentDate: "2024-12-23",
        AppointmentTime: "11:00:00",
        Status: "pending",
        CreatedAt: "2024-12-20T10:00:00"
      }
    ]
  }
]

export default {
  polikinlikdb
}
