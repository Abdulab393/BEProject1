const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');
const profileController=require('../controllers/home_controller');

console.log("Router is set,Hurray!");
router.get('/',homeController.home);
router.get('/profile',profileController.profile);

module.exports=router;