const Sequelize = require('../config/database')
const DataTypes = require('Sequelize')


const VacationsDates = Sequelize.define('vacations_dates', {
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
    date: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.INTEGER
    },
    note: {
        type: DataTypes.STRING
    },
    approved_by: {
        type: DataTypes.INTEGER
    },
    vacation_id: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    },



}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'

});












module.exports = VacationsDates