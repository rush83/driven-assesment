const router = require('express').Router()
const { vacationdates, store, update, del } = require('../controllers/Vocationsdates-controller')




//
router.get('/', vacationdates)

router.post('/', store)


router.put('/', update)


router.delete('/', del)







module.exports = router