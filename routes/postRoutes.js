const router = require('express').Router();
const { Post, User, Comment } = require('../models');


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


// GET post via id
router.get('/:id', async (req, res) => {
    try {
        const singlePost = await Post.findByPk(req.params.id, {
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

        console.log(singlePost)

        if(!singlePost) {
            res.status(404).json({ message: "No posts with this ID!"});
            return;
        }
        res.status(200).json(singlePost); 
    } 
    
    catch (err) {
        res.status(500).json(err);
    }
});

// Create post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
            timestamp: Date.now()
        })

        if(!newPost) {
            res.status(404).json({ message: 'Post info is required'});
            return;
        }

        res.status(200).json(newPost);
    } 
    
    catch (err) {
        res.status(500).json(err);
    }
});   

// update a post by id
router.put('/:id', async (req, res) => {
    try {
        const postToUpdate = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if(!postToUpdate[0]) {
            res.status(400).json({ message: 'No posts with this ID!' });
            return;
        }

        res.status(200).json(postToUpdate); 
    } 
    catch (err) {
        res.status(500).json(err);
    }
});

// delete a post by id
router.delete('/:id', async (req, res) => {
    try {
        const postToDelete = await Post.findByPk(req.params.id) 
        Post.destroy({
            where: {
                id: req.params.id,
            },
        });    
        if(!postToDelete) {
            res.status(400).json({ message: 'No post with this ID!' });
            return;
        }
        res.status(200).json(postToDelete); 
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;