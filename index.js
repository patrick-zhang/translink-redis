const assert = require('assert');

const api = require('./src/api');

const config = require('./src/config');

assert.ok(config.API_KEY, '\n API key not defined in environment variable API_KEY\n');

process
  .on('SIGINT', () => { process.exit(); });

api.listen(config.API_PORT);
