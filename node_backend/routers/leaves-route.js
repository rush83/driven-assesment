const router = require('express').Router()
const { leaves, leavesbyins, store, update, del } = require('../controllers/leaves-controller')




//
router.get('/', leaves)
router.get('/:id', leavesbyins)

router.post('/', store)


router.put('/:id', update)


router.delete('/:id', del)







module.exports = router