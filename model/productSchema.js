import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id : String,
    url : String,
    detailUrl : String,
    title : Object,
    price : Object,
    description : String,
    discount : String,
    tagline : String,
})

const Product = mongoose.model('products', productSchema);

export default Product