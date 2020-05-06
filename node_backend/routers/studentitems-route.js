const router = require('express').Router()
const { items, itemsbyins, store, del } = require('../controllers/studentitems-controller')




//
router.get('/', items)
router.put('/:id', itemsbyins)
router.post('/', store)
router.delete('/:id', del)













module.exports = router