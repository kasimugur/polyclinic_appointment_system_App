const db = require('../db');

const Doctor = {
    create: (doctorName, specialization, departmentId, callback) => {
        const sql = 'INSERT INTO doctors (DoctorName, Specialization, DepartmentID) VALUES (?, ?, ?)';
        db.query(sql, [doctorName, specialization, departmentId], callback);
    },
    findById: (id, callback) => {
        const sql = 'SELECT * FROM doctors WHERE DoctorID = ?';
        db.query(sql, [id], callback);
    },
    // Diğer gerekli fonksiyonlar (güncelleme, silme vb.) eklenebilir
};

module.exports = Doctor;