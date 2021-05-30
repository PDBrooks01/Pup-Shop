const express = require('express')
const productController = require('../controllers/products')
const router = express.Router()

router.get('/', productController.getProducts);
router.get('/:id', productController.showProducts);

module.exports = router
