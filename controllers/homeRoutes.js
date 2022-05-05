const { Post } = require('../models');
const auth = require('../utils/auth');

const router = require('express').Router();
// const { User, Post } = require('../models');

router.get('/', auth,  async (req, res) => {
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

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

   res.render('login');
});

router.get('/signup',  (req, res)=> {
  try {

    res.render('signup');
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/messages',  (req, res)=> {
  try {

    res.render('posts');
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  module.exports = router;