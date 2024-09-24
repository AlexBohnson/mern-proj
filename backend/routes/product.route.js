import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";

const router = express.Router();

router.get("/hello", (req, res) => {{
    res.send("API is running");
}});

router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success:true, data: products});
    } catch (error) {
        console.error("error in get products", error.message);
        res.status(500).json({success:false, message: "Server error"});
    }
})



router.post("/", async (req, res) => {
    const product = req.body; //user will send this data

    if (!product.name || !product.price || !product.imageUrl) {
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product); //product from model.js

    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct}); //201 means something created
    } catch (error) {
        console.error("error in create product", error.message);
        res.status(500).json({success:false, message: "Server error"});
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({success:false, message: "Invalid product id"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true}); //new:true will return the updated product
        res.status(200).json({success:true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({success:false, message: "Server Error"});
        console.log("error in update product", error.message);
    }
})


router.delete("/:id", async (req, res) => {
        const { id } = req.params;
        
        try {
            await Product.findByIdAndDelete(id);
            res.status(200).json({success:true, message: "Product deleted"});
        } catch (error) {
            console.error("error in delete product", error.message);
            res.status(404).json({success:false, message: "Product not found"});
        }
});

export default router; //exporting the router