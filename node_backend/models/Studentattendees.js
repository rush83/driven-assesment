const Sequelize = require('../config/database')
const DataTypes = require('Sequelize')


const Studentattendees = Sequelize.define('user_attendees', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    attend_type: {
        type: DataTypes.STRING
    },

    student_code: {
        type: DataTypes.STRING
    },

    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    material_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    institute_id: {
        type: DataTypes.INTEGER,

    },





}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'

});












module.exports = Studentattendees