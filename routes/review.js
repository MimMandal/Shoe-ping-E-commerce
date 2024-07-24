const Product = require('../models/Products');
const express = require('express');
const Review = require('../models/Review');
const {validateReview}=require('../middleware')

const router = express.Router();


// Adding a review to a specific product
router.post('/products/:id/review',validateReview, async (req, res) => {
    try{
    let { id } = req.params;
    let { rating, comment } = req.body;
    const product = await Product.findById(id);
    const review = new Review({ rating, comment });
    product.reviews.push(review);
    await review.save();
    await product.save();
    res.redirect(`/products/${id}`);
    }
    catch(err){
        res.status(500).render('error', { error: err });
    }
});

module.exports = router;