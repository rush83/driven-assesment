const studentitems = require('../models/Studentitems')




exports.items = (req, res) => {
    Studentitems.findAll({
        attributes: {}
    }).then(studentitems => {
        res.json(studentitems)
    })
}


exports.itemsbyins = (req, res) => {
    Studentitems.findAll({
        attributes: {},
        where: {
            institute_id: req.params.id

        }
    }).then(studentitems => {
        res.json(studentitems)
    })

}

exports.store = (req, res) => {
    Studentitems.create(req.body)
        .then(studentitems => {
            res.json(studentitems)
        })
        .catch(err => console.log(err))
}



exports.del = (req, res) => {
    Studentitems.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(studentitems => {

            studentitems.destroy()
            res.json(studentitems)
        })
        .catch(err => console.log(err))

}