require('dotenv').config()

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/flashcards'

const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/collections', require('./routes/collectionRoutes'))

// serve frontend
if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')))

  console.log(path.join(__dirname, './client/build'))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

// start
const start = () => {
  try {
    mongoose.connect(DB_URI, () => {
      console.log(`DB connected`)

      app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    })
    
  } catch (err) {
    console.log(err)
  }
}

start()
