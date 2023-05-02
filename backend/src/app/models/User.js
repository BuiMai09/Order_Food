const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Users = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        // isAdmin: {
        //     type: Boolean,
        //     default: false,
        // },
        createdAt: { type: Date, default: Date.now }
    },
    {
        timestamps: true,
    },
);



// Add plugins


module.exports = mongoose.model('Users', Users);