const router = require('express').Router()
const { protect } = require('../middleware/authMiddleware')
const userController = require('../controllers/userController')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/info', protect, userController.getUser)
router.patch('/add-collection/:id', protect, userController.addCollection)
router.patch('/edit', protect, userController.edit)

module.exports = router
