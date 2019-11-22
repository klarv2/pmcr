const express = require('express');
const router = express.Router();

//Image Model
const Item = require('../../models/Image');

//@route   GET api/images
//@desc    Get All Images
//@access  Public 
router.get('/', (req, res) => {
    Image.find()
        .sort({ date: -1})
        .then(images => res.json(images));
})

module.exports = router;