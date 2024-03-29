﻿require('rootpath')();
require('dotenv').load();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');

app.set('trust proxy', true);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/payment-init-1.0', require('./payment-init/payment-init.controller'));

// global error handler
app.use(errorHandler);
// start server
// const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const port = process.env.PORT || 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
