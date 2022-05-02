const { Post } = require('../models');

const router = require('express').Router();
// const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
      // const dbPostData = await Post.findAll({
      //   include: [
      //     {
      //       model: User,
      //       attributes: ['username'],
      //     },
      //   ],
      // });
  
      // const posts = dbPostData.map((post) =>
      //   post.get({ plain: true })
      // );
  
      res.render('home');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res)=>{
try {
  const dbCreatePost = await Post.create({
    title: req.body.title, contents: req.body.contents, user_id: req.body.user_id
  })
  res.json(dbCreatePost)
  } catch (err){
    console.log(err);
    res.status(500).json(err);
}
});

  module.exports = router;