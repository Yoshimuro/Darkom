const Router = require('express')
const router = new Router()
const subCategoryController = require('../controllers/subCategoryController')

router.post('/', subCategoryController.create)
router.get('/', subCategoryController.getAll)
router.delete('/', subCategoryController.delete)

module.exports = router