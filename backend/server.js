import express from "express";
import products from "./data/product.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  res.send(products.find((x) => x._id === req.params.id));
});

app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
