const Collection = require('../models/collectionModel')

const collectionController = {
  // @route  GET /api/collections
  // @desc   Get a list of user's collections
  // @access Private
  async getCollections(req, res) {
    try {
      const collections = await Collection.find({ author: req.user._id })

      res.json(collections)
    } catch (error) {
      res.json({ error: error.message })
    }
  },
  // @route  GET /api/collections/:id
  // @desc   Get a single collection
  // @access Private
  async getCollection(req, res) {
    try {
      const collection = await Collection.findById(req.params.id)

      res.json(collection)
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
