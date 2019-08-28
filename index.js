const assert = require('assert');

const api = require('./src/api');

const config = require('./src/config');

const logger = require('./src/services/logger');

assert.ok(config.API_KEY, '\n API key not defined in environment variable API_KEY\n');

logger.info(`Config: ${config}`);

process
  .on('SIGINT', () => { process.exit(); });

api.listen(config.API_PORT, () => {
  logger.info(`API listening on port: ${config.API_PORT}`);
});
