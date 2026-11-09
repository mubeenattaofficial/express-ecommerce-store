const authService = require("../services/authService");

exports.register = async (req, res, next) => {
    try {
        const user = await authService.register(req.body);

        res.status(201).json({
            success: true,
            message: "Account created successfully. Please login.",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const result = await authService.login(req.body);

        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};