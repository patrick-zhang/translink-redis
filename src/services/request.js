const axios = require('axios');

const config = require('../config');

const logger = require('./logger');

const request = async (pathQuery) => {
  logger.debug(`Request: ${pathQuery}`);
  const url = `${config.TRANSLINK_BASE_URL}/${pathQuery}`;
  const options = {
    url,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  };
  const result = await axios(options);
  logger.debug('Request result:', JSON.stringify(Object.keys(result)));
  return result;
};

module.exports = request;
