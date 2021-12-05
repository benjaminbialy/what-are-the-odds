const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
    event:{
        type: String,
        required: true,
    },
    odds:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }
})

const EventModel = mongoose.model("events",EventSchema)

module.exports = EventModel