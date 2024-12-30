import { NextResponse } from "next/server"
import { query } from "../../../lib/db"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(req) {
  const { email, password } = await req.json()

  try {

    const users = await query('SELECT * FROM users WHERE Email=?', [email])
    if (users.length === 0) {
      return NextResponse.json({ error: 'kullanıcı bulunamadı' }, { status: 401 })
    }

    const user = users[0]
    const isPasswordValid = await bcrypt.compare(password, user.PasswordHash)
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Geçersiz şifre' }, { status: 401 });
    }
    const token = jwt.sign(
      { 
        email: user.Email, 
        id: user.UserID
      },
      SECRET_KEY,
      { expiresIn: "1h" } 
    );
    

    return NextResponse.json({ message: 'Giriş başarılı', token });
  } catch (error) {
    console.error('Giriş hatası:', error);
    return NextResponse.json({ error: 'Giriş hatası' }, { status: 500 });
  }
}