const express = require('express') // bring this in so we can make our router
const Animals = require('../models/animalSchema')

// create router

const router = express.Router()

// routes
// router.get('/seeds', (req, res) => {})

// index
router.get('/', (req, res) => {
    Animals.find({})
    .then((animals) => {
        res.render('index.ejs', { animals })
    })
    .catch(err => console.log(err))
})

// new
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// create
router.post('/', (req, res) => {
    req.body.extinct = req.body.extinct === 'on' ? true : false
    Animals.create(req.body, (err, createdAnimal) => {
        res.redirect('/animals')
    })
})


// edit
router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    Animals.findById(id) 
    .then((animal) => {
        res.render('edit.ejs', { animal })
    })
})

// update
// .put
// needs to be redirected
router.put('/:id', (req, res) => {
    req.body.extinct === req.body.extinct === 'on' ? true : false // SOMETHING IS WRONG HERE. IF I CHECK THE BOX, IT WON'T UPDATE. IF I DON'T CHECK THE BOX, IT WILL UPDATE.
    // const id = req.params.id
    Animals.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedAnimal) => {
    // console.log(updatedAnimal)
    res.redirect(`/animals/${req.params.id}`)
    })
})

// show
router.get('/:id', (req, res) => {
    // here I am grabbing the animal from the database
    const id = req.params.id
    Animals.findById(id)
    .then((animal) => {
        res.render('show.ejs', { animal })
    })
})

// delete
router.delete('/:id', (req, res) => {
    Animals.findByIdAndDelete(req.params.id, (err, deletedAnimal) => {
        console.log(deletedAnimal)
        res.redirect('/animals')
    })
})


module.exports = router // without this we'll get an error