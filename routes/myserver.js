const express = require("express");
const router = express.Router();


router.get("/api", (req, res) => {
    res.send("<h1> Welcome to the myserver</h1>");
});

router.get('/lol',(req,res) => {
    res.send('<h1> this is lol page </h1>')
})

module.exports = router;