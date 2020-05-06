const router = require('express').Router()
const { employees, employeesbyins, store, update, updatestatus, updatepassword, del } = require('../controllers/user-controller')




//
router.get('/', employees)

router.get('/:id', employeesbyins)

router.post('/', store)


router.put('/:id', update)
router.put('/password/:id', updatepassword)
router.put('/stop/:id', updatestatus)

router.delete('/:id', del)






module.exports = router