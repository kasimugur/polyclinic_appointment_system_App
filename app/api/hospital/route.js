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