// lib/db.js
import mysql from 'mysql2/promise';



const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const query = async (sql, params) => {
    try {
      const [results] = await db.execute(sql, params);
      return results;
    } catch (error) {
      console.error('SQL Error:', error); // Hata mesajını konsola yazdır
      throw error; // Hatanın üst katmana iletilmesini sağla
    }
  };