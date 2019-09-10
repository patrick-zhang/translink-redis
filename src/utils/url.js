const { URLSearchParams } = require('url');

const config = require('../config');

const getPathQuery = (path, query) => {
  let q = '';
  if (query) {
    const usp = new URLSearchParams(query);
    usp.append('apikey', config.API_KEY);
    q = `?${usp}`;
  }
  return path + q;
};

module.exports = {
  getPathQuery,
};
