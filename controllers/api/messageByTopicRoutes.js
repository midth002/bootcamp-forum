const router = require('express').Router();
const { User, Post, Comments } = require('../../models');

router.get('/:topic', async (req, res) => {
    try {
        const messages = await Post.findAll({
            where: {
                topic: req.params.topic
            }
        })
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;