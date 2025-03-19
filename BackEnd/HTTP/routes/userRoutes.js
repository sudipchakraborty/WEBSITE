const express = require('express');
const router = express.Router();
const userController = require('../services/userService.js');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/users', userController.getAllUsers);
router.put('/update', userController.updateUserPassword);
router.delete('/delete', userController.deleteUser);

module.exports = router;
