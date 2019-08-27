const axios = require('axios');

const config = require('../config');

const logger = require('./logger');

const request = async ({ path, query }) => {
  const usp = new URLSearchParams(query);
  usp.append('apikey', config.API_KEY);
  const url = `${config.TRANSLINK_BASE_URL}/${path}?${usp}`;
  const options = {
    url,
    headers: {
      accept: 'application/json',
    },
  };
  try {
    const result = await axios(options);
    logger.debug(JSON.stringify(Object.keys(result)));
    return result;
  } catch (e) {
    logger.logError(e);
    return {
      status: 500,
      data: {
        errorMessage: e.message,
      },
    };
  }
};

module.exports = request;
