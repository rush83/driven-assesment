const Userattendees = require('../models/Userattendees')




exports.attendees = (req, res) => {
    Userattendees.findAll({
        attributes: {}
    }).then(userattendees => {
        res.json(userattendees)
    })
}


exports.attendeesbyins = (req, res) => {
    Userattendees.findAll({
        attributes: {},
        where: {
            institute_id: req.params.id

        }
    }).then(userattendees => {
        res.json(userattendees)
    })

}

exports.store = (req, res) => {
    Userattendees.create(req.body)
        .then(userattendees => {
            res.json(userattendees)
        })
        .catch(err => console.log(err))
}



exports.del = (req, res) => {
    Userattendees.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(userattendees => {

            userattendees.destroy()
            res.json(userattendees)
        })
        .catch(err => console.log(err))

}