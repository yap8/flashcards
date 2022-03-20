const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

const authMiddleware = {
  async protect(req, res, next) {
    try {
      const token = req.headers.authorization
  
      if (!token) throw new Error('no token')
      if (!jwt.verify(token, JWT_SECRET)) throw new Error('invalid token')

      const { user } = jwt.verify(token, JWT_SECRET)

      req.user = await User.findById(user.id).select('-password')

      next()
    } catch (error) {
      res.json({ error: error.message })
    }
  }
}

module.exports = authMiddleware
