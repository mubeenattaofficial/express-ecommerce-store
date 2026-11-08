const categoryService = require("../services/categoryService");
const ApiError = require("../utils/ApiError");


exports.getAll = async (req, res, next) => {
    try {
        const category = await categoryService.getAllCategories();

        res.status(200).json({
            success: true,
            count: category.length,
            data: category,
        });
    }
    catch(error){
        next(error);
    }
};

exports.getById = async (req, res, next) => {
    try {
        const category = await categoryService.getSingleCategory(req.params.id);

        if (!category) {
            throw new ApiError(404, "Category not found"); // ✅ ab consistent
        }

        res.status(200).json({
            success: true,
            data: category,
        });
    }
    catch(error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        const category = await categoryService.createCategory(req.body);

        res.status(201).json({
            success: true,
            message: "New Category created Successfully",
            data: category,
        });
    }
    catch(error) {
        next(error);
    }
};