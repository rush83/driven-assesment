const Sequelize = require('../config/database')
const DataTypes = require('Sequelize')


const Vacations = Sequelize.define('vacations', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    vacationtype: {
        type: DataTypes.INTEGER
    },
    submissions: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    },
    is_print: {
        type: DataTypes.INTEGER
    },
    reason: {
        type: DataTypes.TEXT
    },
    note: {
        type: DataTypes.STRING
    },
    approved_by: {
        type: DataTypes.INTEGER
    },
    institute_id: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    },



}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'

});












module.exports = Vacations