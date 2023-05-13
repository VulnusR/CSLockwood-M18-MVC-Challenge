const express = require('express');
const app = express();

//middleware and configuration setup

//routes
const signupRoutes = require('./routes/signup');
const indexRoute = require('./routes/index');
app.use(signupRoutes);
app.use(indexRoute);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });