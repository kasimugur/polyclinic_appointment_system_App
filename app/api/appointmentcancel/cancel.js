export async function PUT(req) {
  try {
    const body = await req.json();
    const { appointmentId } = body; // İptal edilecek randevu ID'si
console.log("server tarafı appointmentId",appointmentId)
    // Randevu ID kontrolü
    if (!appointmentId) {
      return NextResponse.json({ error: 'Randevu ID gerekli' }, { status: 400 });
    }

    // Randevuyu iptal etme sorgusu
    const result = await query(`
      UPDATE Appointments 
      SET Status = 'İptal Edildi' 
      WHERE AppointmentID = ?
    `, [appointmentId]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: 'Randevu bulunamadı' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Randevu başarıyla iptal edildi' });
  } catch (error) {
    console.error('Veritabanı hatası:', error.message);
    return NextResponse.json({ error: 'Randevu iptal edilemedi' }, { status: 500 });
  }
}