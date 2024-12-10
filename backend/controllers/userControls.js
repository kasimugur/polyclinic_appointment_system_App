const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser  = (req, res) => {
    const { username, email, password, role } = req.body;

    User.findByEmail(email, (err, results) => {
        if (err) return res.status(500).json({ message: 'Sunucu hatası' });
        if (results.length > 0) {
            return res.status(400).json({ message: 'E-posta zaten mevcut' });
        }

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return res.status(500).json({ message: 'Şifre hashleme hatası' });

            User.create(username, email, hashedPassword, role, (err) => {
                if (err) return res.status(500).json({ message: 'Kullanıcı kaydı hatası' });
                res.status(201).json({ message : 'Kullanıcı başarıyla kaydedildi' });
            });
        });
    });
};

const getUserById = (req, res) => {
    const userId = req.params.id;

    User.findById(userId, (err, results) => {
        if (err) return res.status(500).json({ message: 'Sunucu hatası' });
        if (results.length === 0) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }
        res.status(200).json(results[0]);
    });
};

// Diğer gerekli kontrolcü fonksiyonları (güncelleme, silme vb.) eklenebilir

module.exports = {
    registerUser ,
    getUserById,
};