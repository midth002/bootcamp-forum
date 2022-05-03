const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const messageRoutes = require('./messageRoutes');


router.use('/login', loginRoutes);
router.use('/messages', messageRoutes);

module.exports = router;