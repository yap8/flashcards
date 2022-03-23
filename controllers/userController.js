const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

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

      const token = getToken({
        user: {
          email: user.email,
          id: user._id
        }
      })

      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 864000000
      })

      res.json({ token })
    } catch (error) {
      res.json({ error: error.message })
    }
  },
  // @route  GET /api/users/:id
  // @desc   Get user info
  // @access Public
  async getUser(req, res) {
    try {
      const { id } = req.params

      const user = await User.findById(id).select('-password -email')

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

      if (!user || !await bcrypt.compare(password, user.password)) {
        return res.json({ error: 'No user with such credentials' })
      }

      const token = getToken({
        user: {
          email: user.email,
          id: user._id
        }
      })

      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 864000000
      })

      res.json({ token })
    } catch (error) {
      res.json({ error: error.message })
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

const getToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '10d'
  })

  return token
}

module.exports = userController
