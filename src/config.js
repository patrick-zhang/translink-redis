module.exports = {
  API_PORT: process.env.API_PROT || 3000,
  TRANSLINK_BASE_URL: process.env.TRANSLINK_BASE_URL || 'https://api.translink.ca',
  API_KEY: process.env.API_KEY,
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  REDIS_HOST: process.env.REDIS_HOST || 'redis',
  REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
  REDIS_EXPIRE_TIME: Number(process.env.REDIS_EXPIRE_TIME) || 30,
};
