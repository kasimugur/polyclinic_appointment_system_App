// const express = require('express');
// const router = express.Router();
// const db = require('../database/db');

// router.get('/users',(req, res)=> {
//   db.query('SELECT * FROM users', (err, results) => {
//     if(err) {
//       return res.status(500).json({error:err});
//     }
//     res.json(results);
//   })
// })

// module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser );
router.get('/:id', userController.getUserById);
// Diğer gerekli rotalar (güncelleme, silme vb.) eklenebilir

module.exports = router;