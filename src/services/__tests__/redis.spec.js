const redis = require('../redis');

// const dummyLogger = console;

// eslint-disable-next-line arrow-body-style
jest.mock('ioredis', () => {
  // arrow functions can't be constructed
  // eslint-disable-next-line func-names
  return function () {
    return {
      on: jest.fn(),
      get: jest.fn(),
      set: jest.fn(),
      del: jest.fn(),
      quit: jest.fn(),
    };
  };
});

describe('redis', () => {
  it('set value', () => {
    redis.set('key', 'value');
  });
  it('set value', () => {
    redis.get('key');
  });
  it('handle on connect', () => {
    redis.connectHandler();
    redis.connectHandler('error');
  });
});
