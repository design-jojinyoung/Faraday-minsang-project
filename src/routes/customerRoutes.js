const express = require('express');
const multer = require('multer');
const router = express.Router();
const customerController = require('../controllers/customerController');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', customerController.createCustomer);
router.post('/upload', upload.single('file'), customerController.uploadCSV);
router.post('/send-by-status', customerController.sendByStatus);
router.get('/', customerController.getCustomers);
router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
