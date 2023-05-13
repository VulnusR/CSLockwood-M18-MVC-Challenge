const router = require('express').Router();
const Routes = require('./routes');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashRoutes');

router.use('/', homeRoutes);
router.use('/api', Routes);
router.use('/dashboard', dashboardRoutes)

router.use((req, res) => {
    res.send("<h1>Invalid Route!</h1>")
});

module.exports = router;