const { Schema, model } = require('mongoose')

const cardSchema = new Schema({
  front: {
    type: String,
    required: true
  },
  back: {
    type: String,
    required: true
  }
})

module.exports = model('Cards', cardSchema)
