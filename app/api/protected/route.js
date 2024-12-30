import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

export async function GET(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Token gerekli!" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    return NextResponse.json({ message: "Erişim başarılı", user: verified });
  } catch (err) {
    return NextResponse.json({ error: "Geçersiz token" }, { status: 403 });
  }
}
