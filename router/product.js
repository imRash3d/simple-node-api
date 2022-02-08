const express = require("express");
var router = express.Router();

const productController = require('../controllers/product')




router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.post('/add', productController.addProduct);
router.delete('/:id', productController.deleteProduct);
router.post('/:id', productController.editProduct);

module.exports = router;