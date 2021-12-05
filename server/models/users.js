const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    highscore:{
        type: Number,
        default: 0,
    }
})

const UserModel = mongoose.model("users",UserSchema)

module.exports = UserModel