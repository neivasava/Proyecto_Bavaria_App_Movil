const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/Pedido_Bavaria';

mongoose.connect(url)
    .then(() => console.log('Connect DB Success'))
    .catch((err) => console.log(`ERROR to connect : ${err.message}`));

module.exports = mongoose;