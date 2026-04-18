const express = require("express");
const router = express.Router();
const {wellcomeToServer,lolpage} = require('../controller/servercontrol')



router.get("/api", wellcomeToServer);

router.get('/lol',lolpage)


module.exports = router;