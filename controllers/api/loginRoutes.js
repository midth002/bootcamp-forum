const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    // Find the user who matches with the username in the database
    const user = await User.findOne({ where: {email: req.body.email}});

    // If there is no match with the username, send a incorrect message to the user and have them retry
    if (!user) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // Now verify the password the user has put in and check in the database if this password coincides with the username 
    const validPw = await user.checkPassword(req.body.password);

    // const validPw = await User.findOne({ where: {password: req.body.password }});
    // // If the password doesn't exist, then send a error message of wrong password and have them retry.
    if (!validPw) {
      res.status(401).json({ message: 'Incorrect password, please try again' });
      return;
    }

    // Session variables based on the current logged in user
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      
      res.json(User);
    });
    // 
    res.status(200).json({message: `Hello`});
    res.render('home')


  } catch (error) {
    res.status(500).json(error);
    console.log(error)
  }
});

router.get('/signup', (req, res)=> {
  res.render('signup')
})

router.post('/signup', async (req, res) => {
  try {
    // Find the user who matches with the username in the database
    const user = await User.findOne({ where: {user_name: req.body.user_name }});

    // If there is no match with the username, send a incorrect message to the user and have them retry
    if (!user) {
      try {
        const createUser = await User.create({
          ...req.body, 
        });
        //figure out how to use nodemailer
        res.json({message: `User created`})
      } catch(err){
        res.status(500).json(err)
      }
    } else {
      res.status(400).json({message: 'Please make sure password is at least 8 characters long and make sure username does not already exist'})
    }


  } catch (error) {
    res.status(400).json(error);
    console.log(error)
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;