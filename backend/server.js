const express = require('express'); //Line 1
const app = express(); //Line 2
const port = 5000; //Line 3
const cors = require("cors");

app.use(cors());
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/', (req, res) => { //Line 9
  res.send("test")
});
app.get("/test",(req,res)=>{
  res.send(JSON.stringify({test:"test route"}));
})