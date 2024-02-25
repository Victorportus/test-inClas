const mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://VictorClass:SFFAD8JjukcCyAkV@fullclass.krtybxv.mongodb.net/';

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
