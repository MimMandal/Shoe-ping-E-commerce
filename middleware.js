
const Review = require('./models/Review');
const { productSchema, reviewSchema,} = require('./schema');

const validateProduct = (req, res, next) => {
  let { name, img, price, desc } = req.body;
  const { error } = productSchema.validate({ name, img, price, desc });
  if (error) {
    return res.status(400).render('error', { error: error.details[0].message });
  }
  next();
}

const validateReview = (req, res, next) => {
  let { rating, comment } = req.body;
  const { error } = reviewSchema.validate({ rating, comment });
  if (error) {
    return res.status(400).render('error', { error: error.details[0].message });
  }
  next();
}

const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
};

const isSeller = (req, res, next) => {
  if (!req.user.role) {
    return res.redirect('/products');
  }
  else if(req.user.role!== 'seller'){
    return res.redirect('/products');
  }
  next();
};

const isProductAuthor= async(req, res, next)=>{
  let {id}=req.params;
 let product= await Product.findById(id);
 if(!product.author.equals(req.user._id)){
  return res.redirect('/products')
 }
 next();
}

module.exports = { validateProduct, validateReview ,isLoggedIn,isSeller,isProductAuthor};
