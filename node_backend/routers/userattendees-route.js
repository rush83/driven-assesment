const router = require('express').Router()
const { attendees, attendeesbyins, store, del } = require('../controllers/userattendees-controller')




//
router.get('/', attendees)
router.put('/:id', attendeesbyins)
router.post('/', store)
router.delete('/:id', del)













module.exports = router