const router = require('express').Router()
const collectionController = require('../controllers/collectionController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, collectionController.getCollections)
router.get('/:id', protect, collectionController.getCollection)
router.post('/', protect, collectionController.addCollection)

module.exports = router
