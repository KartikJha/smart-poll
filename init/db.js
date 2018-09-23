const mongoose = require('mongoose');

const connectToBackend = dataBaseUri => mongoose.connect(dataBaseUri, error => {
    if (error) console.log('Mongo failed'); else console.log('Mongo success')
});

module.exports = connectToBackend;