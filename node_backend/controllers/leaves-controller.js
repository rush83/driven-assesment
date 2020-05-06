const Leaves = require('../models/Leaves')




exports.leaves = (req, res) => {
    Leaves.findAll({
        attributes: {}
    }).then(leaves => {
        res.json(leaves)
    })
}

exports.leavesbyins = (req, res) => {
    Leaves.findAll({
        attributes: {},
        where: {
            institute_id: req.params.id

        }
    }).then(leaves => {
        res.json(leaves)
    })

}

exports.store = (req, res) => {
    Leaves.create(req.body)
        .then(leave => {
            res.json(leave)
        })
        .catch(err => console.log(err))
}



exports.update = (req, res) => {
    Leaves.findOne({
        where: {
            id: req.params.id
        }
    }).then(leave => {
        leave.status = req.body.status


        leave.save()
        res.json(leave)
    })

    .catch(err => console.log(err))
}






exports.del = (req, res) => {
    Leaves.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(leave => {

            leave.destroy()
            res.json(leave)
        })
        .catch(err => console.log(err))

}