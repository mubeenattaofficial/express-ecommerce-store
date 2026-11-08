const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

const validate = require("../middlewares/validate");
const { createProductSchema } = require("../validators/product.validator");

router.get("/", productController.get);
router.get("/:id", productController.getById);
router.post("/", validate(createProductSchema), productController.create);

module.exports = router;