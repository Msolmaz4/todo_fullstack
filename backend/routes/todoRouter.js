const router =require('express').Router();
const allsController = require("../controllers/allsController")
const alls = require("../controllers/alls")

router.get('/',alls)
router.post('/',allsController)



module.exports=router