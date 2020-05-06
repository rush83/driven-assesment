const User = require('../models/User')





exports.employees = (req, res) => {
    User.findAll({
        attributes: ['name', 'jop_title', 'id', 'institute_id']
    }).then(users => {
        res.json(users)
    })

}

exports.employeesbyins = (req, res) => {
    User.findAll({
        attributes: ['name', 'jop_title', 'id', 'institute_id'],
        where: {
            institute_id: req.params.id

        }
    }).then(users => {
        res.json(users)
    })

}

exports.store = (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json(user)
        })
        .catch(err => console.log(err))
}



exports.update = (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        user.name = req.body.name
        user.institute_id = req.body.institute_id
        user.permission = req.body.permission
        user.status = req.body.status
        user.gender = req.body.gender
        user.email = req.body.email
        user.save()
        res.json(user)
    })

    .catch(err => console.log(err))
}

exports.updatepassword = (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        user.password = req.body.password
        user.save()
        res.json(user)
    })

    .catch(err => console.log(err))
}


exports.updatestatus = (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        user.status = req.body.status
        user.save()
        res.json(user)
    })

    .catch(err => console.log(err))
}



exports.del = (req, res) => {
    User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(user => {

            user.destroy()
            res.json(user)
        })
        .catch(err => console.log(err))

}