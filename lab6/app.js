import express from "express";
import { products } from "./data.js";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello from Express</h1>");
});

app.get("/api/products", (req, res) => {

    const filterProducts = products.map((product) => {
        const { description, rating, ...rest } = product;
        return rest;
    });

    res.json({
        count: filterProducts.length,
        data: filterProducts
    });
});

app.get("/api/products/:id", (req, res) => {

    const { id } = req.params;

    const product = products.find((item) => item.id ==(id));

    if (!product) {
        return res.status(404).json({
            msg: `Product not found with id: ${id}`
        });
    }

    res.status(200).json(product);
});

app.listen(3334, () => {
    console.log("Server is running on port 3334");
});