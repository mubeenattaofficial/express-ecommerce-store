const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const router = express.Router();

router.use("/products", productRoutes);

app.use("/api", router);

module.exports = app;