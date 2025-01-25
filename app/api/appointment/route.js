import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export async function GET(req) {
  const userId = req.nextUrl.searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'Kullanıcı ID gerekli' }, { status: 400 });
  }

  try {
    const appointment = await query(`
      SELECT 
        A.AppointmentID,
        A.AppointmentDate,
        A.AppointmentTime,
        D.FullName AS DoctorName,
        DE.DepartmentName AS DepartmentName,
        H.HospitalName AS HospitalName,
        Status
      FROM 
        Appointments A
      JOIN 
        Doctors D ON A.DoctorID = D.DoctorID
      JOIN 
        Departments DE ON D.DepartmentID = DE.DepartmentID
      JOIN 
        Hospitals H ON A.HospitalId = H.HospitalId
      WHERE 
        A.UserID = ?
    `, [userId]);

    return NextResponse.json(appointment);
  } catch (error) {
    console.error('Veritabanı hatası:', error);
    return NextResponse.json({ error: 'Randevular alınamadı' }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    const body = await req.json();
    const { UserID, DoctorID, DepartmentID, HospitalId, AppointmentDate, AppointmentTime } = body;

    // Eksik alanlar kontrolü
    if (!UserID || !DoctorID || !DepartmentID || !HospitalId || !AppointmentDate || !AppointmentTime) {
      console.log('Eksik alanlar:', { UserID, DoctorID, DepartmentID, HospitalId, AppointmentDate, AppointmentTime });
      return NextResponse.json({ error: 'Tüm alanlar gereklidir' }, { status: 400 });
    }

    // Veritabanına veri ekleme sorgusu
    const result = await query(`
      INSERT INTO Appointments 
      (UserID, DoctorID, DepartmentID, HospitalId, AppointmentDate, AppointmentTime) 
      VALUES (?, ?, ?, ?, ?, ?)
    `, [UserID, DoctorID, DepartmentID, HospitalId, AppointmentDate, AppointmentTime]);

    return NextResponse.json({ message: 'Randevu başarıyla eklendi', appointmentId: result.insertId });
  } catch (error) {
    console.error('Veritabanı hatası:', error);
    return NextResponse.json({ error: 'Randevu eklenemedi' }, { status: 500 });
  }
}
