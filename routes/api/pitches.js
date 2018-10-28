const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const multer = require("multer");
const path = require('path');
const fs = require("fs");
const http = require("http");


const Pitch = require('../../models/Pitch');


//@route    GET api/person
//@dsc      Get a person from the database
//@access   Public
router.get('/all', (req,res) => {
    const errors = {};
    console.log(req.params.id);
    Pitch.find()
        .then(pitches => {
            console.log(pitches);
            if(!pitches){
                errors.noprofile = 'There is no person for this id.';
                res.status(404).json(errors);
            }
            else{
                res.json(pitches);
            }
        })
        .catch(err => {
            console.log(err);
            errors.noprofile = 'There is no profile for this user.';
            res.status(400).json(err)
        });
});

//@route    GET api/person
//@dsc      Get a person from the database
//@access   Public
router.get('/:id', (req,res) => {
    const errors = {};
    console.log(req.params.id);
    Pitch.findById(req.params.id)
        .then(pitch => {
            console.log(pitch);
            if(!pitch){
                errors.noprofile = 'There is no person for this id.';
                res.status(404).json(errors);
            }
            else{
                res.json(pitch);
            }
        })
        .catch(err => {
            console.log(err);
            errors.noprofile = 'There is no profile for this user.';
            res.status(400).json(err)
        });
});

router.post('/', (req,res) => {
    const pitchObj = req.body;
    console.log(req.body._id);
    const newPitch = new Pitch(
        pitchObj
    );
    console.log(pitchObj);
    if(req.body._id !== undefined){
        Pitch.findOne({_id : req.body._id})
            .then(pitch => {
                if(pitch) {
                    Pitch.findOneAndUpdate(
                        {'_id': pitch._id},
                        {$set: pitchObj},
                        {new: true}
                    )
                        .then(
                            pitch => res.json(pitch)
                        )
                }
            });
    }
    else{
        newPitch.save().then(pitch => res.json(pitch))
    }
});

module.exports = router;