const { Schema, model } = require('mongoose')

const collectionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  cards: {
    type: [{
      front: {
        type: String,
        required: true
      },
      back: {
        type: String,
        required: true
      }
    }],
    default: []
  }
}, {
  timestamps: true
})

module.exports = model('Collections', collectionSchema)
