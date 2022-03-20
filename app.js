require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/mern-flashcards'

const app = express()

// middleware
app.use(express.json())

// routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/collections', require('./routes/collectionRoutes'))

// start
const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    mongoose.connect(DB_URI, () => console.log(`DB connected`))
  } catch (err) {
    console.log(err)
  }
}

start()
