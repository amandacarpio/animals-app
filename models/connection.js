require('dotenv').config() // loads env variables which is where our mongoose database url is listed
const mongoose = require('mongoose') // gives us the mongodb connection and access to db's crud methods

// establishing connection to mongodb // this is unique to mongo
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(DATABASE_URL, CONFIG)

// log connection events from mongoose
mongoose.connection
.on('open', () => console.log('Mongoose connected'))
.on('close', () => console.log('Disconnected from Mongoose'))
.on('error', (error) => console.log('Mongoose error', error))

// export mongoose with connection to use in other files 
module.exports = mongoose