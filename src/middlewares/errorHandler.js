const ApiError = require("../utils/ApiError");


const errorHandler = (err, req, res, next) => {
    // Agar humara apna ApiError hai
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }


    // Prisma ka unique constraint error
    if (err.code === "P2002") {
        return res.status(409).json({
            success: false,
            message: "Already exists",
        });
    }

    // Baaki sab unknown errors
    console.error(err);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
};

module.exports = errorHandler;