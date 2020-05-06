const router = require('express').Router()
const { students, studentsbyins, store, update, updatestatus, updatepassword, del } = require('../controllers/students-controller')





router.get('/', students)

router.get('/:id', studentsbyins)

router.post('/', store)


router.put('/:id', update)
router.put('/password/:id', updatepassword)
router.put('/stop/:id', updatestatus)

router.delete('/:id', del)






module.exports = router