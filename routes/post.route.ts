import { route } from './identifier';
const {
    createPosts
} = require('../controllers');


route.post('/create', createPosts);;

module.exports = route;