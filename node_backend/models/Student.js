const Sequelize = require('../config/database')
const DataTypes = require('Sequelize')
const op = Sequelize.Op;





const Student = Sequelize.define('students', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },

    institute_id: {
        type: DataTypes.INTEGER
    },

    section_id: {
        type: DataTypes.INTEGER
    },

    year_id: {
        type: DataTypes.INTEGER
    },

    room_id: {
        type: DataTypes.INTEGER
    },

    waiting_room: {
        type: DataTypes.INTEGER
    },

    status: {
        type: DataTypes.INTEGER
    },

    position: {
        type: DataTypes.INTEGER
    },

    submissions: {
        type: DataTypes.STRING
    },

    secondary_education: {
        type: DataTypes.INTEGER
    },

    submission_form: {
        type: DataTypes.INTEGER
    },

    insurance_form: {
        type: DataTypes.INTEGER
    },

    books_status: {
        type: DataTypes.INTEGER
    },

    books_second_status: {
        type: DataTypes.INTEGER
    },

    bus_status: {
        type: DataTypes.INTEGER
    },

    payment: {
        type: DataTypes.INTEGER
    },

    installment_first_status: {
        type: DataTypes.INTEGER
    },

    installment_second_status: {
        type: DataTypes.INTEGER
    },

    installment_first_amount: {
        type: DataTypes.DOUBLE
    },

    installment_second_amount: {
        type: DataTypes.DOUBLE
    },

    block_result: {
        type: DataTypes.INTEGER
    },

    discount: {
        type: DataTypes.INTEGER
    },

    discount_file: {
        type: DataTypes.STRING
    },

    discount_reason: {
        type: DataTypes.STRING
    },

    discount_seen: {
        type: DataTypes.INTEGER
    },

    is_transfer: {
        type: DataTypes.INTEGER
    },

    is_chance: {
        type: DataTypes.INTEGER
    },

    name: {
        type: DataTypes.STRING
    },

    birthdate: {
        type: DataTypes.STRING
    },

    father_jop: {
        type: DataTypes.STRING
    },

    phone: {
        type: DataTypes.STRING
    },

    mobile: {
        type: DataTypes.STRING
    },

    address: {
        type: DataTypes.STRING
    },

    governorate: {
        type: DataTypes.STRING
    },

    qualification: {
        type: DataTypes.STRING
    },

    total: {
        type: DataTypes.STRING
    },

    sitting_number: {
        type: DataTypes.STRING
    },

    secret_number: {
        type: DataTypes.STRING
    },

    password: {
        type: DataTypes.STRING
    },

    code: {
        type: DataTypes.STRING
    },

    avatar: {
        type: DataTypes.STRING
    },

    gender: {
        type: DataTypes.STRING
    },

    triple_digit: {
        type: DataTypes.STRING
    },

    recruitment_number: {
        type: DataTypes.STRING
    },

    national_id: {
        type: DataTypes.STRING
    },

    notes: {
        type: DataTypes.TEXT
    },

    checkout: {
        type: DataTypes.STRING
    },

    is_agree: {
        type: DataTypes.INTEGER
    },

    is_survey: {
        type: DataTypes.INTEGER
    },

    is_seen: {
        type: DataTypes.INTEGER
    },

    is_updated: {
        type: DataTypes.INTEGER
    },

    is_first_installment_print: {
        type: DataTypes.INTEGER
    },

    is_second_installment_print: {
        type: DataTypes.INTEGER
    },

    is_received_card: {
        type: DataTypes.INTEGER
    },

    is_received_first_book: {
        type: DataTypes.INTEGER
    },

    is_received_second_book: {
        type: DataTypes.INTEGER
    },

    is_receiving_insurance: {
        type: DataTypes.INTEGER
    },

    receiving_insurance_amount: {
        type: DataTypes.DOUBLE
    },

    is_print_card: {
        type: DataTypes.INTEGER
    },

    exam_sitting_number: {
        type: DataTypes.STRING
    },

    exam_committee: {
        type: DataTypes.STRING
    },

    isolated_reason: {
        type: DataTypes.TEXT
    },

    isolated_start: {
        type: DataTypes.STRING
    },

    isolated_end: {
        type: DataTypes.STRING
    },

    paper_sitting_number: {
        type: DataTypes.STRING
    },



    remember_token: {
        type: DataTypes.STRING
    },


}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'

});





module.exports = Student