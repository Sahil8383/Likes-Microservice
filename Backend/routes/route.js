const express = require('express');
const router = express.Router();

const { createContent, getAllLikes, likeContent } = require('../controller/likesController');


// Get all likes

router.post('/createContent', createContent );

router.get('/getAllLikes', getAllLikes );

router.put('/like/:id', likeContent );

module.exports = router;