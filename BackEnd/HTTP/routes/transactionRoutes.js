const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/record', transactionController.recordTransaction);
router.get('/logs', transactionController.getTransactionLogs);

module.exports = router;
