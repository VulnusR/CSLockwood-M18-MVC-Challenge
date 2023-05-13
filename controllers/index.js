const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashRoutes');


// Home page route
router.get('/', (req, res) => {
  // Render the 'models/index.hbs' file as the response
  res.render('index');
});

// Use other routes
router.use('/home', homeRoutes);
router.use('/dashboard', dashboardRoutes);

// Invalid route
router.use((req, res) => {
  res.send("<h1>Invalid Route!</h1>");
});

module.exports = router;




