const Redis = require('ioredis');

const config = require('../config');

const redis = new Redis({
  port: config.REDIS_PORT,
  host: config.REDIS_HOST,
});

redis.on('connect', (err) => {
  console.log('+++', err);
});

const get = (key) => {
  console.log('+++', key);
  return redis.get(key);
};

const set = (key, value) => {
  console.log('+++', key);
  redis.set(key, value);
};

module.exports = {
  get,
  set,
};
