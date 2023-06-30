const express = require('express');
const Likes = require('../model/Likes');
const LikesCount = require('../model/CountLike');
const mongoose = require('mongoose');
const createContent = async (req, res) => {
    try {

        const {user_id, content_id} = req.body;

        const content = new Likes({
            _id: new mongoose.Types.ObjectId(),
            user_id,
            content_id,
            likes: 0
        })

        await content.save();
 
        return res.status(200).json({ content });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


const getAllLikes = async (req, res) => {
    try {
        const likes = await Likes.find();
        return res.status(200).json({ likes });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// create a function when a user likes a content it will be added to the database

const likeContent = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        // const like = await Likes.findById(id);
        const content = await Likes.findById(id);
        console.log(content);
        if (content.likes>=0) {
            // likeCnt.likes = likeCnt.likes + 1;
            content.likes = content.likes + 1;
            await content.save();
            return res.status(200).json({ content });
        }
        throw Error("Content not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createContent,
    getAllLikes,
    likeContent
}




