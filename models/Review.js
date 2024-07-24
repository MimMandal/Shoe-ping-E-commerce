const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    comment: {
        type: String,
        trim: true,
    },
},{timestamps:true});

module.exports = mongoose.model('Review', reviewSchema);