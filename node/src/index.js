const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
require('../config/connect-mongo');
require('../Excel/excel-json')

const app = express();

app.set('port', process.env.PORT || 5444);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/api/bavaria', require('../routes/pedido'));

app.listen(app.get('port'), () => {
    console.log(`Api is listen in port ${app.get('port')}`);
})