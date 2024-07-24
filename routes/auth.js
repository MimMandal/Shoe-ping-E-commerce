const express = require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router();


//signup
router.get('/register', (req, res)=>{
    res.render('auth/signup')
})
router.post('/register', async (req, res, next) => {
    try {
        let { username, email, password, role} = req.body;
        const user = new User({ username, email, role});
        const newUser = await User.register(user, password);
        req.login(newUser, function(err) {
            if (err) {
                return next(err);
            }
            res.redirect('/products');
        });
    } catch (err) {
        res.status(500).render('error', { error: err });
    }
});


  //login
router.get('/login', (req, res)=>{
    res.render('auth/login')
})

router.post('/login',passport.authenticate('local', { failureRedirect: '/login' }), (req, res)=>{
     res.redirect('/products')
})


//logout
router.get('/logout',(req, res)=>{
    ()=>{
        req.logOut();
    }
    res.redirect('/login')

})


module.exports = router;