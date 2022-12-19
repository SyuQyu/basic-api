const exprs = require('express');

const posts = require('./post.route')

const router = exprs.Router();

router.use('/posts', posts);

module.exports = router;