const Deductions = require('../models/Deductions')



exports.deductions = (req, res) => {
    Deductions.findAll({
        attributes: {}
    }).then(deductions => {
        res.json(deductions)
    })

}

exports.deductionsbyins = (req, res) => {
    User.findAll({
        attributes: {},
        where: {
            institute_id: req.params.id

        }
    }).then(users => {
        res.json(users)
    })

}

exports.store = (req, res) => {
    Deductions.create(req.body)
        .then(deduction => {
            res.json(deduction)
        })
        .catch(err => console.log(err))
}



exports.update = (req, res) => {
    Deductions.findOne({
        where: {
            id: req.params.id
        }
    }).then(deduction => {
        deduction.days = req.body.days
        deduction.message = req.body.message

        deduction.save()
        res.json(deduction)
    })

    .catch(err => console.log(err))
}






exports.del = (req, res) => {
    Deductions.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(deduction => {

            deduction.destroy()
            res.json(deduction)
        })
        .catch(err => console.log(err))

}