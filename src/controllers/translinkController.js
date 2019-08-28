const request = require('../services/request');

const redis = require('../services/redis');

const urlUtil = require('../utils/url');

const getTranslinkInfo = async (req, res) => {
  const { path, query } = req;
  const pathQuery = urlUtil.getPathQuery(path, query);
  const cache = await redis.get(pathQuery);
  let result;
  if (cache === null) {
    result = await request(pathQuery);
    redis.set(pathQuery, JSON.stringify(result.data));
  } else {
    result = {
      status: 200,
      data: JSON.parse(cache),
    };
  }
  res.status(result.status).json(result.data);
};

module.exports = {
  getTranslinkInfo,
};
