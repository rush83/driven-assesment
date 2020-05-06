const mongoose = require('../config/mongo')


const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
module.exports = Kitten