const Student = require('../models/Student')





exports.students = (req, res) => {
    Student.findAll({
        attributes: ['name', 'year_id', 'id', 'institute_id']
    }).then(students => {
        res.json(students)
    })

}

exports.studentsbyins = (req, res) => {
    Student.findAll({
        attributes: ['name', 'year_id', 'id', 'institute_id'],
        where: {
            institute_id: req.params.id

        }
    }).then(students => {
        res.json(students)
    })

}

exports.store = (req, res) => {
    Student.create(req.body)
        .then(student => {
            res.json(student)
        })
        .catch(err => console.log(err))
}



exports.update = (req, res) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    }).then(student => {
        student.name = req.body.name
        student.institute_id = req.body.institute_id
        student.permission = req.body.permission
        student.status = req.body.status
        student.gender = req.body.gender
        student.email = req.body.email
        student.save()
        res.json(student)
    })

        .catch(err => console.log(err))
}

exports.updatepassword = (req, res) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    }).then(student => {
        student.password = req.body.password
        student.save()
        res.json(student)
    })

        .catch(err => console.log(err))
}


exports.updatestatus = (req, res) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    }).then(student => {
        student.status = req.body.status
        student.save()
        res.json(student)
    })

        .catch(err => console.log(err))
}



exports.del = (req, res) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(student => {

            student.destroy()
            res.json(student)
        })
        .catch(err => console.log(err))

}