const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { prisma } = require("../db/prisma");
const ApiError = require("../utils/ApiError");


exports.register = async (data) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email: data.email,
        }
    });
    if (existingUser) {
        throw new ApiError(409, "Email already registered");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword,
        }
    });

    const { password, ...userWihoutPassword } = user;
    return userWihoutPassword;
};

exports.login = async (data) => {
    const userExist = await prisma.user.findUnique({
        where: {
            email: data.email,
        }
    });

    if (!userExist) {
        throw new ApiError(401, "Invalid email or password");
    }

    const isMatch = await bcrypt.compare(data.password, userExist.password);

    if (!isMatch) {
        throw new ApiError(401, "Invalid email or password");
    }

    const token = jwt.sign(
        { id: userExist.id, email: userExist.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return { token };
}