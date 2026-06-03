const express = require('express');
const { userlogged,loggeduser } = require('../controllers/analyticscontroller');
const userrouter = express.Router();

userrouter.post("/",userlogged);
userrouter.post("/login",loggeduser);
module.exports = userrouter;