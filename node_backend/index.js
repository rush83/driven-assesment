require('dotenv').config()


// include packages 

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const dbMongo = require('./config/mongo')
dbMongo()

const MongoModel = require('./models/Kitty')

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://admin:abc123@ds149353.mlab.com:49353/mern-stack', { useNewUrlParser: true, useUnifiedTopology: true });
// var kittySchema = new mongoose.Schema({
//     name: String
// });


// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log("Connected")
// });

// init app 
const app = express()

app.use(cors())

// use body parser 

app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('index page ')
})


app.use('/api/users', require('./routers/user-route'))
app.use('/api/deductions', require('./routers/deduction-route'))
app.use('/api/Vocations', require('./routers/Vocations-route'))
app.use('/api/vocationsdates', require('./routers/vocationsdates-route'))
app.use('/api/userattendees', require('./routers/userattendees-route'))
app.use('/api/leaves', require('./routers/leaves-route'))
app.use('/api/students', require('./routers/student-route'))
app.use('/api/studentattendees', require('./routers/studentattendees-route'))
app.use('/api/studentitems', require('./routers/studentitems-route'))

app.listen(process.env.PORT)