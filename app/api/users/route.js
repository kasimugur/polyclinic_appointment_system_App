// app/api/users/route.js
import { NextResponse } from 'next/server';
import { query } from '../../../lib/db'; // Veritabanı bağlantısı

export async function GET() {
  try {
    const users = await query('SELECT * FROM users');
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Veri çekme hatası' }, { status: 500 });
  }
}

