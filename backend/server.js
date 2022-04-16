const express = require('express'); //Line 1
const app = express(); //Line 2
const port = 5000; //Line 3
const cors = require("cors");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/online-shop-react');
const db = mongoose.connection;
db.on('error',(err)=>console.log(err));
db.once('open',()=>console.log("conected"));

app.use(cors());
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

const getSales = require('./routes/getSales');
const getCategorie  = require('./routes/getCategorie');
const getSubCategorie = require('./routes/getSubCategorie');

app.use("/getSales",getSales);
app.use("/getCategorie",getCategorie);
app.use("/getSubCategorie",getSubCategorie);