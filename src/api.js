const express = require('express');

const cors = require('cors');

const api = express();

api.use(cors());

const request = require('./services/request');

const catchAll = async (req, res) => {
  const { path, query } = req;
  const result = await request({ path, query });
  res.status(result.status).json(result.data);
};

api.get('*', catchAll);

module.exports = api;
