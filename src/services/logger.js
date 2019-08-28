// logging library using winston, which provides functions like log level, rotate file etc.
// https://github.com/winstonjs/winston/tree/2.x

const winston = require('winston');

const config = require('../config');

const winstonLogger = new winston.Logger({
  level: config.LOG_LEVEL,
  transports: [
    new (winston.transports.Console)({
      colorize: true,
      timestamp: true,
    }),
  ],
});

const logger = {
  log: (level, message) => {
    winstonLogger.log(level, message);
  },
  error: (message) => {
    winstonLogger.error(message);
  },
  warn: (message) => {
    winstonLogger.warn(message);
  },
  info: (message) => {
    winstonLogger.info(message);
  },
  debug: (message) => {
    winstonLogger.debug(message);
  },
};

logger.logError = (err) => {
  logger.error(`Error: ${JSON.stringify(err, Object.getOwnPropertyNames(err))}`);
};

module.exports = logger;
