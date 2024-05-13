import { response, request } from 'express';
import bcryptjs from 'bcryptjs';
import Comment from './comment.model.js';


export const CommentPost = async (req, res) => {
    console.log('commentPost')
    const { name, comment } = req.body;

    const com = new Comment({name, comment});

    await com.save();

    res.status(200).json({
        com
    })
}

export const CommentGet = async (req, res) => {
    const query = { estado: true };

    const com = await Comment.find(query);

    res.status(200).json({
        com
    });
    
    
};

