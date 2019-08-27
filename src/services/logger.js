// logging library using winston, which provides functions like log level, rotate file etc.
// https://github.com/winstonjs/winston/tree/2.x

const httpContext = require('express-http-context');

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

const formatMessage = (message) => {
  const reqId = httpContext.get('reqId');
  if (!reqId) {
    return message;
  }
  return `${message} reqId: ${reqId}`;
};

const logger = {
  log: (level, message) => {
    winstonLogger.log(level, formatMessage(message));
  },
  error: (message) => {
    winstonLogger.error(formatMessage(message));
  },
  warn: (message) => {
    winstonLogger.warn(formatMessage(message));
  },
  verbose: (message) => {
    winstonLogger.verbose(formatMessage(message));
  },
  info: (message) => {
    winstonLogger.info(formatMessage(message));
  },
  debug: (message) => {
    winstonLogger.debug(formatMessage(message));
  },
  silly: (message) => {
    winstonLogger.silly(formatMessage(message));
  },
};

logger.logError = (err) => {
  logger.error(`Error: ${JSON.stringify(err, Object.getOwnPropertyNames(err))}`);
};

module.exports = logger;
