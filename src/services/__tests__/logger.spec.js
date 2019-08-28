const logger = require('../logger');

describe('logger', () => {
  it('log message', () => {
    logger.log('debug', 'msg');
    logger.debug('debug');
    logger.info('info');
    logger.error('error');
    logger.warn('warn');
    logger.logError('logError');
  });
});
