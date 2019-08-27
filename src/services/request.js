const axios = require('axios');

const config = require('../config');

const logger = require('./logger');

const request = async ({ path, query }) => {
  const usp = new URLSearchParams(query);
  usp.append('apikey', config.API_KEY);
  const url = `${config.TRANSLINK_BASE_URL}/${path}?${usp}`;

  try {
    const result = await axios.get(url);
    return result.data;
  } catch (e) {
    logger.logError(e);
    return {};
  }
};

module.exports = request;
