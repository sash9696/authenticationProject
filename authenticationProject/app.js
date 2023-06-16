const express = require('express');

const app = express();


//require a darabase connection
const dbConnect = require('./db/dbConnect');


//execute databse connection

dbConnect()



module.exports = app;