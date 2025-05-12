import { NextResponse } from 'next/server';
import { query } from '../../../lib/db'; 

export async function GET() {
  try {
    const department = await query('SELECT * FROM departments')
    return NextResponse.json(department)
  } catch (error) {
    console.error('Veritabanı hatası:', error); 
    return NextResponse.json({ error: 'Randevular alınamadı' }, { status: 500 }); 
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {DepartmentName} = body;

    // Eksik alanlar kontrolü
    if (!DepartmentName) {
      console.log('Eksik alanlar:', { DepartmentName });
      return NextResponse.json({ error: 'Tüm alanlar gereklidir' }, { status: 400 });
    }

    // Veritabanına veri ekleme sorgusu
    const result = await query(`
      INSERT INTO departments 
      (DepartmentName) 
      VALUES (?)
    `, [DepartmentName]);

    return NextResponse.json({ message: 'Randevu başarıyla eklendi' });
  } catch (error) {
    console.error('Veritabanı hatası:', error);
    return NextResponse.json({ error: 'Randevu eklenemedi' }, { status: 500 });
  }
}
