import { NextResponse } from 'next/server';
import { query } from '../../../lib/db'; 

export async function GET() {
  try {
    const appointment = await query('SELECT * FROM appointments')
    return NextResponse.json(appointment)
  } catch (error) {
    console.error('Veritabanı hatası:', error); 
    return NextResponse.json({ error: 'Randevular alınamadı' }, { status: 500 }); 
  }
}