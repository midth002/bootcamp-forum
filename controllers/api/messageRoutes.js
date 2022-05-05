const router = require('express').Router();
const { User, Post, Comments } = require('../../models');
const byTopicRoutes = require('./messageByTopicRoutes')
//Route to /api/messages/type:
router.use('/topic', byTopicRoutes);

router.get('/', async (req, res) => {
    try{
        const messageData = await Post.findAll().catch((err) => { 
            res.json(err);
        });
            const messages = messageData.map((post) => post.get({ plain: true }));
            res.render('home', { messages });

    }catch (err) {
        res.status(500).json(err);
    }
        
});



//get the specific message with all of its comments.
router.get('/:id', async (req, res) => {
    try {
        console.log("WORKING>>>");
        const message = await Post.findByPk(req.params.id, {
            include: [
                {
                model: Comments,
                include: [
                    {
                        model: User
                    }
                ]
            }
        ]
        });
        res.status(200).json(message);
        } catch (err) {
            console.error(err);
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