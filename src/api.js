const express = require('express');

const cors = require('cors');

const errorHandler = require('./middlewares/errorHandler');

const { getTranslinkInfo } = require('./controllers/translinkController');

const api = express();

api.use(cors());

api.get('*', getTranslinkInfo);

api.use(errorHandler);

module.exports = api;
