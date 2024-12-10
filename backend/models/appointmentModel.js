const db = require('../db');

const Appointment = {
    create: (userId, doctorId, appointmentDate, status, callback) => {
        const sql = 'INSERT INTO appointments (UserID, DoctorID, AppointmentDate, Status) VALUES (?, ?, ?, ?)';
        db.query(sql, [userId, doctorId, appointmentDate, status], callback);
    },
    findByUserId: (userId, callback) => {
        const sql = 'SELECT * FROM appointments WHERE UserID = ?';
        db.query(sql, [userId], callback);
    },
    // Diğer gerekli fonksiyonlar (güncelleme, silme vb.) eklenebilir
};

module.exports = Appointment;