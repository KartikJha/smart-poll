const mongoose = require('mongoose');

const connectToBackend = dataBaseUri => mongoose.connect(dataBaseUri);

module.exports = connectToBackend;