const productService = require("../services/productService");
const ApiError = require("../utils/ApiError");

exports.get = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();

        res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        });
    }
    catch (error) {
        next(error);
    }
};


exports.getById = async (req, res, next) => {
    try {
        const product = await productService.getProductById(req.params.id);

        if (!product) {
            throw new ApiError(404, "Product not found");
        };

        res.status(200).json({
        success: true,
        data: product,
    });
}
    catch (error) {
    next(error);
}
};

exports.create = async (req, res, next) => {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product,
        });
    }
    catch (error) {
        next(error);
    }
};

