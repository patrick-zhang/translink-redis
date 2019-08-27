module.exports = {
  PORT: process.env.PROT || 3000,
  TRANSLINK_BASE_URL: process.env.TRANSLINK_BASE_URL || 'https://api.translink.ca',
  API_KEY: process.env.API_KEY,
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
};
