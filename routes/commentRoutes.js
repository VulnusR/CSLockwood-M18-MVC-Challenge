const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

// GET all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            attributes: ['id', 'timestamp', 'comment_text'],
            include: [
                {
                    model: User, 
                    attributes: ['id', 'username']
                }, 
                {
                    model: Post,
                    attributes: ['id', 'title', 'timestamp']  
                }
            ]
        });

        console.log(commentData)

        if(!commentData) {
            res.status(404).json({ message: "Couldn't get comments"});
            return;
        }

        res.status(200).json(commentData); 
    } 
    
    catch (err) {
        res.status(500).json(err);
    }
});

// Create comment
router.post('/', async (req, res) => {
    console.log('user id:');
    console.log(req.session.user_id)
    try {
        const newComment = await Comment.create({
            ...req.body,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
            timestamp: Date.now()
        });

        if(!newComment) {
            res.status(404).json({ message: 'Please enter comment info'});
            return;
        }

        res.status(200).json(newComment);
    } 
    
    catch (err) {
        res.status(500).json(err);
    }
});