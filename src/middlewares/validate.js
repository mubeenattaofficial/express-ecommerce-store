const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        // Zod v7 mein errors string mein aate hain — parse karo
        let errors;
        try {
            errors = JSON.parse(error.message).map(e => ({
                field: e.path[0] || "unknown",
                message: e.message,
            }));
        } catch {
            errors = [{ message: error.message }];
        }

        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors,
        });
    }
};

module.exports = validate;