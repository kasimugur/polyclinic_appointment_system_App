import { NextResponse } from 'next/server';
import { query } from '../../../lib/db'; 

// Tüm departmanları almak için GET metodu
export async function GET() {
  try {
    const departments = await query('SELECT * FROM departments');
    return NextResponse.json(departments);
  } catch (error) {
    console.error('Veritabanı hatası:', error); 
    return NextResponse.json({ error: 'Departmanlar alınamadı' }, { status: 500 }); 
  }
}

// Yeni bir departman eklemek için POST metodu
export async function POST(req) {
  try {
    const body = await req.json();
    const { DepartmentName } = body;

    // Eksik alanlar kontrolü
    if (!DepartmentName) {
      console.log('Eksik alanlar:', { DepartmentName });
      return NextResponse.json({ error: 'Departman adı gereklidir' }, { status: 400 });
    }

    // Veritabanına veri ekleme sorgusu
    const result = await query(`
      INSERT INTO departments 
      (DepartmentName) 
      VALUES (?)
    `, [DepartmentName]);

    return NextResponse.json({ message: 'Departman başarıyla eklendi' });
  } catch (error) {
    console.error('Veritabanı hatası:', error);
    return NextResponse.json({ error: 'Departman eklenemedi. Lütfen tekrar deneyin.' }, { status: 500 });
  }
}
