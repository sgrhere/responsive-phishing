const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config();


const bodyParser = require('body-parser')
app.use(bodyParser.json());  // doing this, it will store converted data into req.body 
const PORT = process.env.PORT || 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World! Welcome to the plastic server...')
})

//import routers
const dataRoutes = require('./routes/personRoutes')

//use routers
app.use('/submit',dataRoutes)

app.listen(PORT, () => {
    console.log("Server is live now");
})




