const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.engine('hbs', exphbs.engine({
    extname: "hbs",
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: "", //path.join(__dirname, 'views/partials'),
    // helpers: {
     
}));



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Routes setup
const signupRoutes = require('./routes/signup');
const indexRoute = require('./routes/index');
app.use(signupRoutes);
app.use(indexRoute);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});