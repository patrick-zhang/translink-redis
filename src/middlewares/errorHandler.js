const logger = require('../services/logger');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  logger.logError(err);
  res.status(500).json({
    error: err.message,
  });
};

module.exports = errorHandler;
