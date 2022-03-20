const router = require('express').Router()
const { protect } = require('../middleware/authMiddleware')
const userController = require('../controllers/userController')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/:id', userController.getUser)
router.patch('/add-collection/:id', protect, userController.addCollection)

module.exports = router
