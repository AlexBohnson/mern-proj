import mongoose from "mongoose";

/**
 * @typedef {Object} Product
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {string} imageUrl - The URL of the product image.
 * @property {Date} createdAt - The timestamp when the product was created.
 * @property {Date} updatedAt - The timestamp when the product was last updated.
 */
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    },
    {
        timestamps: true // option - this will automatically create a timestamp for when the product was created
    });

    const Product = mongoose.model('Product', productSchema); //Singular capitalized schema name = Product. exporting the model "product" with the schema "productSchema"

    export default Product;