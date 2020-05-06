const Sequelize = require('../config/database')
const DataTypes = require('Sequelize')


const Leaves = Sequelize.define('leaves', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    submissions: {
        type: DataTypes.STRING
    },
    message: {
        type: DataTypes.INTEGER
    },
    leavetime: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.INTEGER
    },
    is_print: {
        type: DataTypes.INTEGER
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












module.exports = Leaves