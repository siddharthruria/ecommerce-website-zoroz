const express = require("express");
const Product = require("../model/Product");

const router = express.Router();

// ------------------------------- ROUTE 1 -------------------------------

// route (/api/product/getAllProducts)

// GET -> get all products

router.get("/getAllProducts", async (_req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      total: products.length,
      products,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("internal server error :/");
  }
});

// ------------------------------- ROUTE 2 -------------------------------

// route (/api/product/products)

// GET -> get all products category wise

router.get("/products", async (req, res) => {
  try {
    const category = req.query.category;
    const products = category
      ? await Product.find({ category }) // find by category if specified
      : await Product.find(); // otherwise, find all products

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("internal server error :/");
  }
});

// ------------------------------- ROUTE 3 -------------------------------

// route (/api/product/:id)

// GET -> get specific product details

router.get("/", async (req, res) => {
  try {
    const id = req.query.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: "product not found",
      });
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("internal server error :/");
  }
});

module.exports = router;
