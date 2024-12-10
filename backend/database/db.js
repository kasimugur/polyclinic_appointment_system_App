const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'poliklinikdb'
});
db.connect((err) => {
    if (err) {
        console.error('Veritabanı bağlantısı hatası: ' + err.stack);
        return;
    }
    console.log('Veritabanına bağlandı.');
});

module.exports = db;
