const express = require('express');
const router = express.Router();
const invoiceController = require('../controller/invoiceController');

router.post('/create', invoiceController.create);
router.get('/', invoiceController.get);
router.delete('/:id', invoiceController.delete);
router.patch('/:id', invoiceController.update);
router.get('/page', invoiceController.renderHome);


module.exports = router;
