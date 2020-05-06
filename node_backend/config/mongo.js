const mongoose = require('mongoose')


// mongoose.connect('mongodb://admin:abc123@ds149353.mlab.com:49353/mern-stack', { useNewUrlParser: true, useUnifiedTopology: true });
const connedDb = async () => {
    try {
        const con = await mongoose.connect('mongodb://admin:abc123@ds149353.mlab.com:49353/mern-stack', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('connected')
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = connedDb