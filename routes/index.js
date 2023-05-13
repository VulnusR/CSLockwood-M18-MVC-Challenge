const express = require('express');
const router = express.Router();

// Handle GET request for the root URL
router.get('/', (req, res) => {
  res.render('index'); // Render the index.hbs file using Handlebars
});

module.exports = router;