import { NextResponse } from 'next/server';
import { query } from '../../../lib/db'; 

export async function GET(req) {
  const userId = req.nextUrl.searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'Kullanıcı ID gerekli' }, { status: 400 });
  }

  try {
    // Veritabanı sorgusu
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
