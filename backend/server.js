import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import product from './models/product.model.js';
import Product from './models/product.model.js';

dotenv.config();

const  app = express();

app.use(express.json()); //middleware that allows us to accept json data in the req.body

app.get("/", (req, res) => {{
    res.send("API is running");
}});

app.post("/api/products", async (req, res) => {
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

    //postman

});

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000")
})

