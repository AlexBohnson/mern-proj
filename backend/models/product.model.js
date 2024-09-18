import mongoose from "mongoose";

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