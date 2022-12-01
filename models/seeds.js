require('dotenv').config()
const mongoose = require('./connection')
const Animals = require('./animalSchema')

mongoose.connection.on('open', () => {

    // data we want to put in the database
    const startingAnimals = [
    { species: "Dodo Bird", extinct: true, location: "Mauritius", lifeExpectancy: 30 },
    { species: "Black Bear", extinct: false, location: "forests", lifeExpectancy: 10 },
    { species: "Bombay Cat", extinct: false, location: "earth", lifeExpectancy: 20 },
    { species: "Tasmanian Tiger", extinct: true, location: "Australia", lifeExpectancy: 7 },
    { species: "Siamese Fish", extinct: false, location: "Southeast Asia", lifeExpectancy: 5 },
    ]


    // delete all animals
    Animals.deleteMany({}, (err, data) => {
        // create new fruits once old fruits are deleted

    Animals.create(startingAnimals, (err, data) => {
        res.send(data)
    })
    })
})