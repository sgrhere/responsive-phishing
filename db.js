const mongoose =  require('mongoose');
require('dotenv').config();

// const mongoURL = process.env.MONGODB_URL_LOCAL 
const mongoURL = process.env.MONGODB_URL;  // (hosted db)

//Set up MongoDB connection
mongoose.connect(mongoURL)

// Get the default connection
// Mongoose maintains a default connection object representing the mongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection
 db.on('connected',() =>{
    console.log("Connected to mongoDB server");
 })

  db.on('error',(err) =>{
    console.log("MongoDB connection error:", err);
 })

  db.on('disconnected',() =>{
    console.log("MongoDB disconnected");
 })

 //Export the database connection

 module.exports = db
