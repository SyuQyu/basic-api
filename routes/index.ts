const exprs = require('express');

const posts = require('./post.route')
const users = require('./user.route')
const router = exprs.Router();

router.use('/posts', posts);
router.use('/users', users);

module.exports = router;