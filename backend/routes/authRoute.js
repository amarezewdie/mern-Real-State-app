const express=require('express');

const { signup } = require('../controllers/authController');

const router=express.Router();

router.route('/sign-up').post(signup);


module.exports=router;