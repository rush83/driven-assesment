const VacationsDates = require('../models/Vocationsdates')




exports.vacationdates = (req, res) => {
    VacationsDates.findAll({
        attributes: {}
    }).then(vocationsdates => {
        res.json(vocationsdates)
    })
}


exports.store = (req, res) => {
    VacationsDates.create(req.body)
        .then(vocationsdate => {
            res.json(vocationsdate)
        })
        .catch(err => console.log(err))
}



exports.update = (req, res) => {
    VacationsDates.findOne({
        where: {
            id: req.params.id
        }
    }).then(vocationsdate => {
        vocationsdate.date = req.body.date

        vocationsdate.save()
        res.json(vocationsdate)
    })

    .catch(err => console.log(err))
}






exports.del = (req, res) => {
    VacationsDates.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(vocationsdate => {

            vocation.destroy()
            res.json(vocationsdate)
        })
        .catch(err => console.log(err))

}