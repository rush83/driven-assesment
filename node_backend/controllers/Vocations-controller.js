const Vocations = require('../models/Vocations')




exports.vocations = (req, res) => {
    Vocations.findAll({
        attributes: {}
    }).then(vocations => {
        res.json(vocations)
    })
}

exports.vocationsbyins = (req, res) => {
    Vocations.findAll({
        attributes: {},
        where: {
            institute_id: req.params.id

        }
    }).then(vocations => {
        res.json(vocations)
    })

}

exports.store = (req, res) => {
    Vocations.create(req.body)
        .then(vocation => {
            res.json(vocation)
        })
        .catch(err => console.log(err))
}



exports.update = (req, res) => {
    Vocations.findOne({
        where: {
            id: req.params.id
        }
    }).then(vocation => {
        vocation.status = req.body.status

        vocation.save()
        res.json(vocation)
    })

    .catch(err => console.log(err))
}






exports.del = (req, res) => {
    Vocations.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(vocation => {

            vocation.destroy()
            res.json(vocation)
        })
        .catch(err => console.log(err))

}