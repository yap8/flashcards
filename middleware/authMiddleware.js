const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

const authMiddleware = {
  async protect(req, res, next) {
    try {
      let token

      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
      }

      if (!token) throw new Error('Not authorized to access this route')

      const decoded = jwt.verify(token, JWT_SECRET)

      const user = await User.findById(decoded.id)

      if (!user) throw new Error('No user found with such id')

      next()
    } catch (error) {
      res.json({ error: error.message })
    }
  }
}

module.exports = authMiddleware
