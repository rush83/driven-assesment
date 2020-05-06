const router = require('express').Router()
const { deductions, deductionsbyins, update, del } = require('../controllers/deductions-controller')




//
router.get('/', deductions)
router.get('/:id', deductionsbyins)
    // router.post('/', store)


router.put('/:id', update)


router.delete('/:id', del)







module.exports = router