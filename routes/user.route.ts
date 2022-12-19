import { route } from './identifier';
const {
    registerCustomer,
    loginCustomer
} = require('../controllers');




route.post('/register', registerCustomer);;
route.post('/login', loginCustomer);;

module.exports = route;