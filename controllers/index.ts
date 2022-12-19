const postsController = require('./controller.posts')
const userController = require('./controller.user')
module.exports = {
    ...postsController,
    ...userController
}