//These are our main functions that will be called when we hit the routes




import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success:true, data: products});
    } catch (error) {
        console.error("error in get products", error.message);
        res.status(500).json({success:false, message: "Server error"});
    }
}

export const createProduct = async (req, res) => {
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
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false, message: "Invalid product id"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true}); //new:true will return the updated product
        res.status(200).json({success:true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({success:false, message: "Server Error"});
        console.log("error in update product", error.message);
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false, message: "Invalid product id"});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product deleted"});
    } catch (error) {
        console.error("error in delete product", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
}