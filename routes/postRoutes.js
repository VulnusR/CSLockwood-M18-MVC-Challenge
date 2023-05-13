const router = require('express').Router();
const { Post, User, Comment } = require('../../models');


// GET all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'title', 'user_id', 'timestamp', 'content'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }, 
                {
                    model: Comment, 
                    attributes: ['timestamp', 'comment_text']
                }
            ]
        });
        console.log(postData)
        if(!postData) {
            res.status(404).json({ message: "Couldn't get posts"});
            return;
        }
        res.status(200).json(postData); 
    } catch (err) {
        res.status(500).json(err);
    }
});







module.exports = router;