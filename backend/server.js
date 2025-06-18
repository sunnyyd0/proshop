import express from "express";
import products from "./data/product.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
dotenv.config();
import userRoute from "./routes/userRoutes.js";
import CookieParser from "cookie-parser";

const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(CookieParser()); // for parsing cookies

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/users", userRoute);
app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
