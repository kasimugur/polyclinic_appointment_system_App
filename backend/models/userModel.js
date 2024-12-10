const db = require('../db');

const User = {
    create: (username, email, passwordHash, role, callback) => {
        const sql = 'INSERT INTO users (UserName, Email, PasswordHash, Role) VALUES (?, ?, ?, ?)';
        db.query(sql, [username, email, passwordHash, role], callback);
    },
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE Email = ?';
        db.query(sql, [email], callback);
    },
    findById: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE UserID = ?';
        db.query(sql, [id], callback);
    },
    // Diğer gerekli fonksiyonlar (güncelleme, silme vb.) eklenebilir
};

module.exports = User;