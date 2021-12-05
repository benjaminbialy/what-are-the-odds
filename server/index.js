const express = require("express");
const app = express();
const mongoose = require("mongoose")
const UserModel = require("./models/users.js")
const EventModel = require("./models/events.js")

app.use(express.json());
mongoose.connect("mongodb+srv://benjaminbialy:BcMw2XYYgEkp5Bq@cluster0.yoo69.mongodb.net/what-are-the-odds-database?retryWrites=true&w=majority")

app.get("/game",(req, res) => {
    EventModel.find({}, (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    })
});

app.get("/getUsers",(req, res) => {
    UserModel.find({}, (err, result) =>{
        if(err){
            console.log(err);
        } else{
            res.json(result);
        }
    })
});
app.post("/addUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
});

app.listen(3001, () => {
    console.log("running smoothly");
});
