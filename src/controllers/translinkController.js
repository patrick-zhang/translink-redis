const request = require('../services/request');

const redis = require('../services/redis');

const urlUtil = require('../utils/url');

const logger = require('../services/logger');

const getTranslinkInfo = async (req, res) => {
  const { path, query } = req;
  const pathQuery = urlUtil.getPathQuery(path, query);
  try {
    const cache = await redis.get(pathQuery);
    let result;
    if (cache === null) {
      logger.debug('cache miss');
      result = await request(pathQuery);
      redis.set(pathQuery, JSON.stringify(result.data));
    } else {
      logger.debug('cache hit');
      result = {
        status: 200,
        data: JSON.parse(cache),
      };
    }
    res.status(result.status).json(result.data);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

module.exports = {
  getTranslinkInfo,
};
