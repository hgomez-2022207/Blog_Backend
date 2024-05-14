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

export const proyectByName = async (req, res = response) => {
    try {
        const { name } = req.query;
        const com = await Comment.find({ name: { $regex: name, $options: "i" } });

        if (com.length === 0) {
            return res.status(404).json({
                msg: "No comments found with the provided name"
            });
        }

        res.status(200).json({
            com
        });
    } catch (error) {
        console.error("Error fetching comments by name:", error);
        res.status(500).json({
            msg: "Internal server error"
        });
    }
};