const express = require('express')
const router = express.Router()
const Person = require('../models/Person');


// POST route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body 

        // Create a new person document using the Mongoose model
        const newPerson = new Person(data);

        //Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = router;
