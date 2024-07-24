const express = require('express');
const router = express.Router();

// Welcome page route
router.get('/', (req, res) => {
  res.render('welcome');
});

module.exports = router;
