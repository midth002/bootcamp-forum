const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const messageRoutes = require('./messageRoutes');
const signupRoutes = require('./signupRoute')


router.use('/login', loginRoutes);
router.use('/messages', messageRoutes);
router.use('/signup', signupRoutes);

module.exports = router;