const exp = require('express');
const {
    createPosts
} = require('../controllers');


const route = exp.Router();

route.post('/create', createPosts);;

module.exports = route;