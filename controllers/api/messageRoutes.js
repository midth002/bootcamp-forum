const router = require('express').Router();
const { User, Post, Comments } = require('../../models');

router.get('/', async (req, res) => {
    try{
        const messageData = await Post.findAll().catch((err) => { 
            res.json(err);
        });
            const messages = messageData.map((post) => post.get({ plain: true }));
            res.render('posts', { messages });

    }catch (err) {
        res.status(500).json(err);
    }
        
});

router.get('/:type', async (req, res) => {
    try {
        const messages = await Post.findAll({
            where: {
                topic: req.params.type
            }
        })
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).json(err);
    }
});


// Create a post. I'm not sure if the ... will work.
// Create a post. I'm not sure if the 
router.post('/', async (req, res) => {
    try {
        const message = await Post.create({
            ...req.body,
            user_id: req.session.user_id 
        });
        res.json({message: 'Post created'})
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;