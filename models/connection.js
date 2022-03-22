var mongoose = require('mongoose');

require('dotenv').config();

// useNewUrlParser ;)
var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// --------------------- BDD -----------------------------------------------------
mongoose.connect(`mongodb+srv://${process.env.BDD_id}:${process.env.BDD_password}@cluster0.o0aje.mongodb.net/fcube?retryWrites=true&w=majority`,
    options,
    function (err) {
        if (err) {
            console.log(`error, failed to connect to the database because --> ${err}`);
        } else {
            console.info('*** Connection to F-Cube Database : Success ***');
        }
    }
);