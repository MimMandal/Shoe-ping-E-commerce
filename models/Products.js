// Product.js
const mongoose = require('mongoose');
const Review = require('./Review');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    img: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    }
});

//prodcution level code , just to delete the reviews after a product is delete using scheme middleware 
productSchema.post('findOneAndDelete', async function(product){
    if(product.reviews.length>0){
       await Review.deleteMany({_id:{$in:product.reviews}})
    }
})

module.exports = mongoose.model('Product', productSchema);
