//Routes are imported from Controller

import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// this reads like - when the user sends a get request to the root url, run the getProducts function
router.get("/", getProducts );
// this reads like - when the user sends a post request to the root url, run the createProduct function
router.post("/", createProduct);
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct);

export default router; //exporting the router