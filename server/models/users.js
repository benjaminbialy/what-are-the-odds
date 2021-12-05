const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    highscore:{
        type: Number,
        required: true,
        default: 0,
    }
})