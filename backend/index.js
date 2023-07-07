const express = require("express");
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cors = require('cors');
dotenv.config();

//const axios = require('axios')

// DB connectivity
mongoose.connect(process.env.DATABASE_ACCESS);


app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({ extended: true }));

//import models
const recruitersModelCopy = require("./models/recruiters");
const candidatesModelCopy = require("./models/candidates");

app.post("/addRecruiter", function(req, res) {
    const newRecruiter = new recruitersModelCopy({
        username : req.body.username,
        password : req.body.password
    });

    newRecruiter.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    });
});


app.post("/addCandidate", function(req, res) {
    const newCandidate = new candidatesModelCopy({
        username : req.body.username,
        location : req.body.location,
        role: req.body.role
    });

    newCandidate.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    });
});


app.get("/getCandidates", function (req, res) {
    candidatesModelCopy.find().then(val => res.send(val));
});


app.get("/getCandidates/:location/:role", function (req, res) {
    var location = req.params.location;
    var role = req.params.role
    if(location=="null" && role=="null")
        candidatesModelCopy.find().then(val => res.send(val));
    
    if(location=="null" && role!="null")
        candidatesModelCopy.find({role: req.params.role}).then(val => res.send(val));
    
    if(role=="null" && location!="null")
        candidatesModelCopy.find({location: req.params.location}).then(val => res.send(val));
    
    if(role!="null" && location!="null")
        candidatesModelCopy.find({location: req.params.location, role: req.params.role}).then(val => res.send(val));
});



app.post("/loginRecruiter" , function(req, res) {
    recruitersModelCopy.findOne({username: req.body.username, password: req.body.password}).then(val => {res.send(val); console.log(val);});
});

app.listen(4000 , function() {
    console.log("Server successfully connected on port 4000.");
});






