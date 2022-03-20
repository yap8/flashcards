const jwt = require('jsonwebtoken')

const User = require('../models/userModel')
const Collection = require('../models/collectionModel')

const collectionController = {
  // @route  GET /api/collections
  // @desc   Get a list of collections
  // @access Private
  async getCollections(req, res) {
    try {
      const { collections } = await User.findById(req.user.id)

      res.json(collections)
    } catch (error) {
      res.json({ error: error.message })
    }
  },
  // @route  POST /api/collections
  // @desc   Create a collection
  // @access Private
  async addCollection(req, res) {
    try {
      const { title, cards } = req.body

      const collection = new Collection({
        title,
        author: req.user.id,
        cards
      })

      await collection.save()

      res.json(collection)
    } catch (error) {
      res.json({ error: error.message })
    }
  }
}

module.exports = collectionController
