const { Product } = require("../models/product.model");
const axios = require("axios");

module.exports = {
  createProduct: (req, res) => {
    const { title, price, description } = req.body;
    if (!title || !price) {
      return res
        .status(400)
        .json({ error: "Title and Price are required fields" });
    }

    const newProduct = new Product({
      title,
      price,
      description,
    });
    newProduct
      .save()
      .then((product) => {
        res.status(201).json(product);
      })
      .catch((error) => {
        console.error("Error creating product", error);
        res.status(500).json({ error: "server error" });
      });
  },

  getAllProducts: (req, res) => {
    Product.find()
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((error) => {
        console.error("Error retrieving products", error);
        res.status(500).json({ error: "server error" });
      });
  },

  getProductById: (req, res) => {
    const productId = req.params.id;
    Product.findById(productId)
      .then((product) => {
        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
      })
      .catch((error) => {
        console.error("error finding product by ID".error);
        res.status(500).json({ error: "server error" });
      });
  },

  
  updateProductById: (req, res) => {
    const productId = req.params.id;
    const updateFields = req.body;

    Product.findByIdAndUpdate(
      productId,
      updateFields,
      { new: true } // Return the updated product
    )
      .then((updatedProduct) => {
        if (!updatedProduct) {
          return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(updatedProduct);
      })
      .catch((error) => {
        console.error("Error updating product by ID:", error);
        res.status(500).json({ error: "Internal server error" });
      });
  },

  deleteProductById: (req, res) => {
    const productId = req.params.id;

    Product.findByIdAndDelete(productId)
      .then((deletedProduct) => {
        if (!deletedProduct) {
          return res.status(404).json({ error: "product not found" });
        }
        res.status(204).end();
      })
      .catch((error) => {
        console.error("error deleting product by id", error);
        res.status(500).json({ error: "server error" });
      });
  },
};
