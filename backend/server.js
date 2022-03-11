let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

// Express Route
const contactRoute = require('../backend/routes/contact.route')

// Connecting MongoDB Database
var url = "mongodb+srv://deeksha:deeksha@cluster0.yfo0v.mongodb.net/contactsDb?retryWrites=true&w=majority";
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.Promise = global.Promise;
mongoose.connect(url).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(cors());
app.use('/contacts', contactRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
res.status(404).send('Error 404!')
});

app.use(function (err, req, res, next) {
console.error(err.message);
if (!err.statusCode) err.statusCode = 500;
res.status(err.statusCode).send(err.message);
});
