const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

//Creates a User
router.post('/', async (req, res) => {
    try {
   const newUser = await User.create(req.body);
    req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;
        console.log(req.session);
        res.status(200).json(newUser);
    });
        if(!newUser) {
            res.status(404).json({ message: 'Please enter user info'});
            return;
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
});








module.exports = router;