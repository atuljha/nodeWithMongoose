const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: {
        type: String,
        required:[true, 'title is required']
    },
    author: {
        type: String,
        required:[true, 'author is required']
    },
    content:{
        type: String,
        required:[true, 'author is required'], minLength: [10,'content should have atleast 10 chars']
    }}
,{timestamps:true});

module.exports = mongoose.model('Story', storySchema);


