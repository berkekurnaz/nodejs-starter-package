const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/users', adminController.getAllUsers);

router.post('/users', adminController.postCreateUser);

module.exports = router;