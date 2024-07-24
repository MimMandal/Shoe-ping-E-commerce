const express = require('express');
const router = express.Router();
const {isLoggedIn}=require('../middleware');
const Products = require('../models/Products');
const User = require('../models/User');



router.post('/user/:productId/add', isLoggedIn,async(req, res)=>{
    let {productId}=req.params;
    let userId=req.user._id;
    let product=await Products.findById(productId);
    let user=await User.findById(userId);
    user.cart.push(product);
    user.save()
    res.redirect('/user/cart');
})

router.get('/user/cart', isLoggedIn,async(req, res)=>{
    let user=await User.findById(req.user._id).populate('cart');
    res.render('cart/cart', {user})

})










module.exports = router;
