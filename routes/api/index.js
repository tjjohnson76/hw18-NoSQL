const router = require('express').Router();

const thought = require('./thought.routes')
const user = require('./user.routes');

router.use('/thought', thought)
router.use('/user', user);

module.exports = router;
