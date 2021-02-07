const express = require("express")
const router = express.Router()
const userController = require("./users/users.controller")
const dataController = require("./data/data.controller")


router.post('/users/authenticate', userController.authenticate);
//router.post('/users/register', userController.register);
router.get('/classi', dataController.getClassi);
router.post('/getType', dataController.getType);
router.get('/homeData', dataController.getHomeData);


module.exports = router