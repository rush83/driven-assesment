const router = require('express').Router()
const { attendees, attendeesbyins, store, del } = require('../controllers/studentattendees-controller')




//
router.get('/', attendees)
router.get('/:id', attendeesbyins)
router.post('/', store)
router.delete('/:id', del)













module.exports = router