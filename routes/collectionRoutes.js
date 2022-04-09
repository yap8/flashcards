const router = require('express').Router()
const collectionController = require('../controllers/collectionController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, collectionController.getCollections)
router.get('/:id', protect, collectionController.getCollection)
router.post('/', protect, collectionController.addCollection)
router.delete('/:id', protect, collectionController.deleteCollection)
router.put('/:id', protect, collectionController.editCollection)

module.exports = router
