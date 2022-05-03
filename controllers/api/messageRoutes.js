const router = require('express').Router();
const { User, Post, Comments } = require('../../models');

router.get('/messages', async (req, res) => {
    try {
        const messages = await Post.findAll();
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('messages/:type', async (req, res) => {
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