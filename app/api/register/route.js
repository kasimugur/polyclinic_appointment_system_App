
import { NextResponse } from 'next/server';
import { query } from '../../../lib/db'; // Veritabanı bağlantısı
import bcrypt from 'bcrypt'; // Şifre hashing için


export async function POST(req) {
  const { fullname, email, password, role } = await req.json();

  try {
    // E-posta adresinin daha önce kaydedilip kaydedilmediğini kontrol et
    const existingUsers = await query('SELECT * FROM users WHERE Email = ?', [email]);
    if (existingUsers.length > 0) {
      return NextResponse.json({ error: 'Bu e-posta adresi zaten kayıtlı.' }, { status: 400 });
    }

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcıyı veritabanına ekle
    await query('INSERT INTO users (Fullname, Email, PasswordHash, Role) VALUES (?, ?, ?, ?)', [fullname, email, hashedPassword, role]);

    return NextResponse.json({ message: 'Kayıt başarılı' }, { status: 201 });
  } catch (error) {
    console.error('Kayıt hatası:', error);
    return NextResponse.json({ error: 'Kayıt hatası' }, { status: 500 });
  }
}