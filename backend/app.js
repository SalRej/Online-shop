const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/online-shop-react');
const db = mongoose.connection;
db.on('error',(err)=>console.log(err));
db.once('open',()=>console.log("conected"));

//const compresssion = require("compression");
// app.use(compresssion({
//     level:6,
//     threshold:0
// }))/
// This displays message that the server running and listening to specified port

const getSales = require('./routes/getSales');
const getCategorie  = require('./routes/getCategorie');
const getSubCategorie = require('./routes/getSubCategorie');
const getProducts = require('./routes/getProducts');
const filterProducts = require('./routes/filterProducts');
const getProdctDescription = require('./routes/getProductDescription');

app.use("/getSales",getSales);
app.use("/getCategorie",getCategorie);
app.use("/getSubCategorie",getSubCategorie);
app.use("/getProducts",getProducts);
app.use('/filterProducts',filterProducts);
app.use('/getProductDescription',getProdctDescription);

// app.get('/test',(req,res)=>{
//     res.sendStatus(200);
// })
module.exports = app;