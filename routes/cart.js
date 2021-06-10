const express = require('express')
const cartController = require('../controllers/cart')
const router = express.Router()

router.get('/',cartController.getAllCartItems);
router.get('/',cartController.postCart);
router.get('/:id',cartController.deleteCart);

module.exports = router;
