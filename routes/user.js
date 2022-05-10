var express = require('express');
var router = express.Router();
var User = require("../models/user");

router.post('/signup', function(req, res, next) {
    addToDB(req, res);
});

async function addToDB(req, res) {
    
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        creation_dt: Date.now()
    });

    try{
        doc = await user.save();
        return res.status(201).json(doc);
    }
    catch(err) {
        return res.status(501).json(err);
    }
}

module.exports = router;