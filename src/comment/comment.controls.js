import { response, request } from 'express';
import bcryptjs from 'bcryptjs';
import Comment from './comment.model.js';


export const CommentPost = async (req, res) => {
    console.log('commentPost')
    const { comment } = req.body;

    const com = new Comment({comment});

    await com.save();

    res.status(200).json({
        com
    })
}
