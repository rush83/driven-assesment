const Sequelize = require('../config/database')
const DataTypes = require('Sequelize')


const Deductions = Sequelize.define('punishments', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    days: {
        type: DataTypes.FLOAT
    },
    message: {
        type: DataTypes.STRING
    },
    submissions: {
        type: DataTypes.STRING
    },
    approved_by: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    approved_name: {
        type: DataTypes.STRING
    },
    user_name: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER
    },




}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'

});












module.exports = Deductions