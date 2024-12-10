const db = require('../db');

const Department = {
    create: (departmentName, callback) => {
        const sql = 'INSERT INTO departments (DepartmentName) VALUES (?)';
        db.query(sql, [departmentName], callback);
    },
    findAll: (callback) => {
        const sql = 'SELECT * FROM departments';
        db.query(sql, callback);
    },
    // Diğer gerekli fonksiyonlar (güncelleme, silme vb.) eklenebilir
};

module.exports = Department;