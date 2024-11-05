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

// route (/api/product/:id)

// GET -> get all products

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
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
    console.error(error.message);
    return res.status(500).send("internal server error :/");
  }
});

module.exports = router;
