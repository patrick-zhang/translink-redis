const Redis = require('ioredis');

const config = require('../config');

const logger = require('./logger');

const hashUtil = require('../utils/hash');

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
  const hash = hashUtil.toHash(key);
  logger.debug(`Redis get: key - ${key}, hash - ${hash}`);
  return redis.get(hash);
};

const set = (key, value) => {
  const hash = hashUtil.toHash(key);
  logger.debug(`Redis set: ${key} : ${value}, hash - ${hash}`);
  redis.set(hash, value, 'EX', config.REDIS_EXPIRE_TIME);
};

module.exports = {
  get,
  set,
};
