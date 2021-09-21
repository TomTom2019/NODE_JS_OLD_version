const express = require('express');
const app = express();
const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://admin:testing123@cluster0.lwqgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//////////////////////////////////

const carSchema = mongoose.Schema({
    brand: String,
    model:String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.model('Car',carSchema);


/////////////////////////////////

const port = process.env.PORT || 3001;
app.listen(port)
