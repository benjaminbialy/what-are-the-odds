const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://benjaminbialy:BcMw2XYYgEkp5Bq@cluster0.yoo69.mongodb.net/what-are-the-odds-database?retryWrites=true&w=majority")


app.listen(3002, () => {
    console.log("running smoothly");
});
