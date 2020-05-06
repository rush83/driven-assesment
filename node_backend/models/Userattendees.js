const Sequelize = require('../config/database')
const DataTypes = require('Sequelize')


const UserAttendees = Sequelize.define('user_attendees', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    submissions: {
        type: DataTypes.STRING,
        allowNull: false
    },
    institute_id: {
        type: DataTypes.INTEGER,

    },





}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'

});












module.exports = UserAttendees