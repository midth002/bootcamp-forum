const router = require('express').Router();
const { User } = require('../../models');
const emailer = require('../../utils/nodemailer');

router.get('/', (req, res) => {
    res.render('signup')
})

router.post('/', async (req, res) => {
    try {
        // Find the user who matches with the username in the database
        // const user = await User.findOne({ where: { user_name: req.body.user_name } });

        // If there is no match with the username, send a incorrect message to the user and have them retry
        // if (!user) {
            try {
                const createUser = await User.create(
                    req.body,
                );
                //figure out how to use nodemailer
                emailer(req.body.email).catch(console.error);
                res.json({ message: `User created` })
            } catch (err) {
                res.status(500).json(err)
            }
        // } else {
            res.status(400).json({ message: 'Please make sure password is at least 8 characters long and make sure username does not already exist' })
        //}


    } catch (error) {
        res.status(400).json(error);
        console.log(error)
    }
});

module.exports = router;