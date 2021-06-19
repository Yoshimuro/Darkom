const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const subCategoryRouter = require('./subCategoryRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')



router.use('/category', categoryRouter)
router.use('/user', userRouter)
router.use('/product',productRouter)
router.use('/subCategory', subCategoryRouter)


module.exports = router