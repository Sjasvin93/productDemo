const express = require('express');

const router = express.Router();

const productController = require('../controllers/products_controller');

router.post('/create', productController.create);

router.get('/new-product', productController.newProduct);

router.get('/update/:id', productController.update);

router.post('/delete/:id', productController.delete);

router.post('/update-action/:id', productController.updateAction);

module.exports = router;