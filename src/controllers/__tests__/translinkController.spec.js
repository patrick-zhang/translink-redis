const redis = require('../../services/redis');

const request = require('../../services/request');

const { getTranslinkInfo } = require('../translinkController');

jest.mock('ioredis');
jest.mock('../../services/redis.js');
jest.mock('../../services/request.js');

redis.set.mockImplementation(jest.fn());

describe('translinkController', () => {
  const res = {
    status: () => {
      return {
        json: jest.fn(),
      };
    },
  };
  const req = {
    path: '/abc',
    query: {
      limit: 3,
    },
  };
  const next = jest.fn();

  it('getTranslinkInfo from cache', () => {
    redis.get.mockImplementation(() => Promise.resolve('{}'));
    getTranslinkInfo(req, res, next);
  });
  it('getTranslinkInfo by http request', () => {
    redis.get.mockImplementation(() => Promise.resolve(null));
    request.mockResolvedValue({ status: 200, data: {} });
    getTranslinkInfo(req, res, next);
  });
  it('handle error from http request', () => {
    redis.get.mockImplementation(() => Promise.resolve(null));
    request.mockImplementation(() => Promise.reject(new Error()));
    getTranslinkInfo(req, res, next);
  });
});
