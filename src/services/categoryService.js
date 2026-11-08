const { prisma } = require("../db/prisma");

exports.getAllCategories = async () => {
    const categories = await prisma.category.findMany();

    return categories;
};

exports.getSingleCategory = async (id) => {
    const categories = await prisma.category.findUnique({
        where: {
            id: Number(id),
        }
    });

    return categories;
};

exports.createCategory = async (data) => {
    const createCategory = await prisma.category.create({
        data: data
    });

    return createCategory;
};


