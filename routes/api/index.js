const router = require('express').Router();

const author = require('./author.routes');
const book = require('./book.routes');
const user = require('./user.routes');

router.use('/author', author);
router.use('/book', book);
router.use('/user', user);

module.exports = router;
