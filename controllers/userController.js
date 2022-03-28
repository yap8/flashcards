const User = require('../models/userModel')

const userController = {
  // @route  POST /api/users/register
  // @desc   Register a new user
  // @access Public
  async register(req, res) {
    try {
      const { name, email, password } = req.body

      const user = new User({
        name,
        email,
        password
      })

      await user.save()

      const authToken = user.getAuthToken()

      res.json({
        id: user._id,
        name,
        email,
        authToken
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  // @route  GET /api/users/info
  // @desc   Get user info
  // @access Private
  async getUser(req, res) {
    try {
      const { id } = req.user

      const user = await User.findById(id).select('-password')

      res.json(user)
    } catch (error) {
      res.json({ error: error.message })
    }
  },
  // @route  POST /api/users/login
  // @desc   Authenticate a user
  // @access Public
  async login(req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user || !await user.matchPassword(password)) throw new Error('No user with such credentials')

      const authToken = user.getAuthToken()

      res.json({ authToken })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  // @route  PATCH /api/users/add-collection/:id
  // @desc   Add a collection to user's list
  // @access Private
  async addCollection(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.user._id, {
        collections: [
          req.params.id,
          ...req.user.collections
        ]
      }, {
        new: true
      })

      res.json(user)
    } catch (error) {
      res.json({ error: error.message })
    }
  }
}

module.exports = userController
