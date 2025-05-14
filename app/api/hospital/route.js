import { NextResponse } from 'next/server';
import { query } from '../../../lib/db'; 

export async function GET() {
  try {
    const hospital = await query('SELECT * FROM hospitals')
    return NextResponse.json(hospital)
  } catch (error) {
    console.error('Veritabanı hatası:', error); 
    return NextResponse.json({ error: 'Randevular alınamadı' }, { status: 500 }); 
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { hospitalName, county, district } = body;

    // Eksik alan kontrolü
    if (!hospitalName || !county || !district) {
      console.log('Eksik alanlar:', { hospitalName, county, district });
      return NextResponse.json({ error: 'Tüm alanlar gereklidir' }, { status: 400 });
    }

    // Veritabanına ekleme
    const result = await query(`
      INSERT INTO hospitals
      (HospitalName, County, District)
      VALUES (?, ?, ?)
    `, [hospitalName.trim(), county.trim(), district.trim()]);

    return NextResponse.json({ message: 'Hastane başarıyla eklendi' });
  } catch (error) {
    console.error('Veritabanı hatası:', error);
    return NextResponse.json({ error: 'Hastane eklenemedi. Lütfen tekrar deneyin.' }, { status: 500 });
  }
}