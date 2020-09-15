import mongoose from 'mongoose';

const tiktokSchema = mongoose.Schema({
    videoURL: String,
    channelName: String,
    song: String,
    description: String,
    likes: Number,
    messages: Number,
    shares: Number
})