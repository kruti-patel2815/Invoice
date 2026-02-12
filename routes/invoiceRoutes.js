// const express = require('express');
// const router = express.Router();
// const invoiceController = require('../controller/invoiceController');

// router.post('/create', invoiceController.create);
// router.get('/', invoiceController.get);
// router.delete('/:id', invoiceController.delete);
// router.patch('/:id', invoiceController.update);
// router.get('/page', invoiceController.Home);


// module.exports = router;
const express = require('express');
const router = express.Router();
const invoiceController = require('../controller/invoiceController');

// API Routes
router.post('/create', invoiceController.create);
router.get('/', invoiceController.get);
router.delete('/:id', invoiceController.delete);
router.patch('/:id', invoiceController.update);

// 🟢 CHANGE 1: Page Routes - AA ADD KARO
router.get('/page', invoiceController.Home);        // Home page (button valo)
router.get('/new', invoiceController.invoicePage);  // Invoice form page (AA NEW CHE)

module.exports = router;