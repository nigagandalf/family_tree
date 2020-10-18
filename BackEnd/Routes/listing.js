const router = require("express").Router();

//request response
router.get("/", (req,res)=> {
        res.send("Hey there");
});

module.exports =router;