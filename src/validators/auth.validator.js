// validators/auth.validator.js
const { z } = require("zod");

const registerSchema = z.object({
    name:     z.string().min(2, "Name required"),
    email:    z.string().email("Valid email required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
    email:    z.string().email("Valid email required"),
    password: z.string().min(1, "Password required"),
});

module.exports = { registerSchema, loginSchema };