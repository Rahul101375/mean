const router = require("express").Router();
const {create,update,deleted,getById,getAll}=require('../controller/controller')

router.route('/').post(create)
router.route('/:id').put(update)
router.route('/:id').delete(deleted)
router.route('/:id').get(getById)
router.route('/').get(getAll)


module.exports=router