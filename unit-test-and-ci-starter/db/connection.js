const mongoose = require('mongoose');

let mongoDB = process.env.MONGO_CONNECTIONS_STRING;

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
