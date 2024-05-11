import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    name:{
        type:String,
        required:['Name of user']
    },
    comment:{
        type:String,
        required:['Comment public']
    },
    estado:{
        type: Boolean,
        default: true
    },
})

export default mongoose.model('Comment', CommentSchema);