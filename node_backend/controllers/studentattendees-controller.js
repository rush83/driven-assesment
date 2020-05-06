const Studentattendees = require('../models/Studentattendees')




exports.attendees = (req, res) => {
    Studentattendess.findAll({
        attributes: {}
    }).then(studentattendess => {
        res.json(studentattendess)
    })
}


exports.attendeesbyins = (req, res) => {
    Studentattendess.findAll({
        attributes: {},
        where: {
            institute_id: req.params.id

        }
    }).then(studentattendess => {
        res.json(studentattendess)
    })

}

exports.store = (req, res) => {
    Studentattendess.create(req.body)
        .then(studentattendess => {
            res.json(studentattendess)
        })
        .catch(err => console.log(err))
}



exports.del = (req, res) => {
    Studentattendess.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(studentattendess => {

            studentattendess.destroy()
            res.json(studentattendess)
        })
        .catch(err => console.log(err))

}