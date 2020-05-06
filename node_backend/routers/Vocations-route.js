const router = require('express').Router()
const { vocations, vocationsbyins, store, update, del } = require('../controllers/Vocations-controller')




//
router.get('/', vocations)
router.get('/:id', vocationsbyins)


router.post('/', store)

router.put('/:id', update)


router.delete('/:id', del)







module.exports = router