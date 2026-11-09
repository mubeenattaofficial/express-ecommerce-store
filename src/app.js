const express = require("express");
const cors = require("cors");

const errorHandler = require("./middlewares/errorHandler");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Pehle routes
const router = express.Router();
router.use("/products", productRoutes);
router.use("/category", categoryRoutes);
router.use("/auth", authRoutes);
app.use("/api", router);

// ✅ errorHandler sabse LAST mein
app.use(errorHandler);

module.exports = app;