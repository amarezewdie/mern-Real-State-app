const express=require('express');

const { signup, signIn } = require('../controllers/authController');

const router=express.Router();

router.route('/sign-up').post(signup);
router.route('/sign-in').post(signIn);


module.exports=router;