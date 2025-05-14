import { NextResponse } from 'next/server';
import { query } from '../../../lib/db'; 

export async function GET() {
  try {
    const doctor = await query('SELECT * FROM doctors')
    return NextResponse.json(doctor)
  } catch (error) {
    console.error('Veritabanı hatası:', error); 
    return NextResponse.json({ error: 'doctorlar alınamadı' }, { status: 500 }); 
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { FullName, DepartmentID, HospitalId } = body;

    // Eksik alan kontrolü
    if (!FullName || !DepartmentID || !HospitalId) {
      console.log('Eksik alanlar:', { FullName, DepartmentID, HospitalId });
      return NextResponse.json({ error: 'Tüm alanlar zorunludur.' }, { status: 400 });
    }

    // Veritabanına ekleme
    const result = await query(`
      INSERT INTO doctors (FullName, DepartmentID, HospitalId)
      VALUES (?, ?, ?)
    `, [FullName.trim(), DepartmentID, HospitalId]);

    return NextResponse.json({ message: 'Doktor başarıyla eklendi' });
  } catch (error) {
    console.error('Veritabanı hatası:', error);
    return NextResponse.json({ error: 'Doktor eklenemedi. Lütfen tekrar deneyin.' }, { status: 500 });
  }
}