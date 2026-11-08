const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryControllers");

const validate = require("../middlewares/validate");
const { createCategorySchema } = require("../validators/category.validator");


router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post("/", validate(createCategorySchema), categoryController.create);

module.exports = router;