const express = require('express');
const port = 5000;
const app = require('./app'); 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/online-shop-react');
const db = mongoose.connection;
db.on('error',(err)=>console.log(err));
db.once('open',()=>console.log("conected"));


app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6