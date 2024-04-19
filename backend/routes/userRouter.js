const router = require("express").Router();
const registerController =require("../controllers/registerController")
const loginController = require("../controllers/loginController")

router.post('/register',registerController)
router.post('/login',loginController)


module.exports =router


//POST =>'/register' =>req.body
//POST=>'/login' =>req.body
//POST=>'/fav/:id' =>req.params
//DELETE =>'/fav/:id' =>req.params
//GET =>'/checkAuth' =>req.headers