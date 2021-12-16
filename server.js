require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, '..', 'public')


// middleware
app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));

// connect to mongo db
const URI = process.env.MONGO_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) =>{
    if (err) throw err;
    else {
        return console.log("mongodb connected");
    }
})
// routes
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})
app.use('/', require('./routes/hostelsRoute'));
app.use('/', require('./routes/itineraryRoute'));

PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`server listening on port ${PORT}`)
})
