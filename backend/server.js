const express = require('express');
const port = 5000;
const app = require('./app'); 

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6