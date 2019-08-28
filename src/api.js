const express = require('express');

const cors = require('cors');

const { getTranslinkInfo } = require('./controllers/translinkController');

const api = express();

api.use(cors());

api.get('*', getTranslinkInfo);

module.exports = api;
