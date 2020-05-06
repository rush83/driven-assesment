const Sequelize = require('../config/database')
const DataTypes = require('Sequelize')


const Studentitems = Sequelize.define('student_items', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    item: {
        type: DataTypes.STRING
    },

    amount: {
        type: DataTypes.STRING
    },






}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'

});












module.exports = Studentitems