const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database');


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Could not connect to database: '+config.db, err);
    } else {
        console.log('Connected to database: '+ config.db);
    }
});

// SET Static Folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
  
app.listen(8080, ()=> {
    console.log('Listing to port 8080');
});