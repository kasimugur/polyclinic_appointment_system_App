import { NextResponse } from "next/server"
import { query } from "../../../lib/db"
import bcrypt from 'bcrypt';

export async function POST(req) {
  const {email, password} = await req.json()
console.log(email)
  try {
    
    const users = await query('SELECT * FROM users WHERE Email=?' ,[email])
    if (users.length === 0) {
      return NextResponse.json({error: 'kullanıcı bulunamadı'}, {status: 401})
    }

    const user= users[0]

    const isPasswordValid = await bcrypt.compare(password, user.PasswordHash)
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Geçersiz şifre' }, { status: 401 });
    }
    return NextResponse.json({ message: 'Giriş başarılı', userId: user.id });
  } catch (error) {
    console.error('Giriş hatası:', error);
    return NextResponse.json({ error: 'Giriş hatası' }, { status: 500 });
  }
}