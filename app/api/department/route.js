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