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

// create a GET route

const homeRouter = require('./routes/home');

app.get("/test",(req,res)=>{
  res.send(JSON.stringify({test:"test route"}));
})
app.use("/home",homeRouter);