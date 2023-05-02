const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Products = new Schema(
    {
        nameCake: { type: String, required: true },
        price: { type: String, required: true },
        quantity: { type: String, required: true },
        description: { type: String, required: true },
        thumbnail: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    },
    {
        timestamps: true,
    },
);



// Add plugins


module.exports = mongoose.model('products', Products);