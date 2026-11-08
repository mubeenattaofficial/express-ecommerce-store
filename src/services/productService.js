const { prisma } = require("../db/prisma");

exports.getAllProducts = async () => {
    const products = await prisma.product.findMany();

    return products;
};

exports.getProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id),
        },
    });

    return product;
};

exports.createProduct = async (data) => {
    const product = await prisma.product.create({ data });
    return product;
};


