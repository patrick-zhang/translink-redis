const Redis = require('ioredis');

const config = require('../config');

const logger = require('./logger');

const redis = new Redis({
  port: config.REDIS_PORT,
  host: config.REDIS_HOST,
});

redis.on('connect', (err) => {
  if (err) {
    logger.error(`Redis connection error: ${err}`);
  } else {
    logger.info('Redis connected');
  }
});

const get = (key) => {
  logger.debug(`Redis get: ${key}`);
  return redis.get(key);
};

const set = (key, value) => {
  logger.debug(`Redis set: ${key} : ${value}`);
  redis.set(key, value, 'EX', config.REDIS_EXPIRE_TIME);
};

module.exports = {
  get,
  set,
};
