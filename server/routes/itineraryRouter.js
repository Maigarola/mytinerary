const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/itineraryModel');


router.get('/all', (req, res) => {
    itineraryModel.find()
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err));
});

router.post('/add', (req, res) => {
    const newItinerary = new itineraryModel({
        cityid:req.body.cityid,
        title: req.body.title,
        img: req.body.img,
        rating: req.body.rating,
        duration: req.body.duration,
        price: req.body.price,
        hastag: req.body.hastag,
    })
    newItinerary.save()
        .then(itinerary => {
            res.send(itinerary)
        })
        .catch(err => {
            res.status(500).send("Server error")
        })
});

module.exports = router;