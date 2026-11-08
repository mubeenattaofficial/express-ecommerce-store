const { z } = require("zod");

const createProductSchema = z.object({
    title:       z.string().min(2, "Title required"),
    description: z.string().optional(),
    price:       z.coerce.number().positive("Price must be positive"),    // ← coerce
    stock:       z.coerce.number().int().min(0, "Stock cannot be negative"), // ← coerce
    brand:       z.string().optional(),
    sku:         z.string().min(2, "SKU required"),
    thumbnail:   z.string().url().nullish(), 
    categoryId:  z.coerce.number().int().positive("Category required"),   // ← coerce
});

module.exports = { createProductSchema };