const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
