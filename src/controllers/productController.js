const productService = require("../services/productService");

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
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

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

exports.create = async (res, res, next) => {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json({
            success: true,
            message: "Product Created Successfully",
            data: product,
        });
    }
    catch (error) {
        next(error);
    }
};