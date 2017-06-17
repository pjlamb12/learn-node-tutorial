const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  res.render('hello', {
    name: 'preston',
    title: 'Test Title'
  });
});

module.exports = router;
