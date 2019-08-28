const config = require('../config');

const getPathQuery = (path, query) => {
  const usp = new URLSearchParams(query);
  usp.append('apikey', config.API_KEY);
  return `${path}?${usp}`;
};

module.exports = {
  getPathQuery,
};
