const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const config = require('./config/database');


const app = express();

const authentication = require('./routes/authentication')(router);

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Could not connect to database: '+config.db, err);
    } else {
        console.log('Connected to database: '+ config.db);
    }
});

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());

// SET Static Folder
app.use(express.static(path.join(__dirname, 'public')));


app.use('/authentication', authentication);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
  
app.listen(8080, ()=> {
    console.log('Listing to port 8080');
});