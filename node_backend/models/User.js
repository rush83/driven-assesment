const Sequelize = require('../config/database')
const DataTypes = require('Sequelize')
const op = Sequelize.Op;




const User = Sequelize.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    institute_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    is_delete: {
        type: DataTypes.INTEGER
    },
    permission: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    },
    is_create_task: {
        type: DataTypes.INTEGER
    },
    finger_code: {
        type: DataTypes.STRING
    },
    jop_title: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.ENUM('male', 'female')
    },
    nationality: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    email: {
        unique: true,
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING
    },
    birthdate: {
        type: DataTypes.INTEGER
    },
    mobile: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.INTEGER
    },
    emergency_name: {
        type: DataTypes.STRING
    },
    emergency_mobile: {
        type: DataTypes.STRING
    },
    college: {
        type: DataTypes.STRING
    },
    section: {
        type: DataTypes.STRING
    },
    dateofgraduation: {
        type: DataTypes.STRING
    },
    degree: {
        type: DataTypes.INTEGER
    },
    language_english: {
        type: DataTypes.STRING
    },
    language_german: {
        type: DataTypes.STRING
    },
    language_french: {
        type: DataTypes.STRING
    },
    language_other: {
        type: DataTypes.STRING
    },
    language_other_degree: {
        type: DataTypes.STRING
    },
    courses: {
        type: DataTypes.STRING
    },
    dateofgraduation: {
        type: DataTypes.STRING
    },
    recentjop: {
        type: DataTypes.INTEGER
    },
    jopexperience: {
        type: DataTypes.STRING
    },
    last_salary: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.STRING
    },
    salary_custome: {
        type: DataTypes.STRING
    },
    startjop: {
        type: DataTypes.STRING
    },
    regular_holiday: {
        type: DataTypes.INTEGER
    },
    recentjop: {
        type: DataTypes.INTEGER
    },
    casual_leave: {
        type: DataTypes.INTEGER
    },
    signature: {
        type: DataTypes.STRING
    },
    national_id: {
        type: DataTypes.TEXT
    },
    number_of_insurance: {
        type: DataTypes.TEXT
    },
    ministerial_decision: {
        type: DataTypes.TEXT
    },
    end_date_of_work: {
        type: DataTypes.TEXT
    },
    remember_token: {
        type: DataTypes.TEXT
    },


}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'

});












module.exports = User