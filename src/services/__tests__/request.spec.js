const axios = require('axios');

const request = require('../request');

jest.mock('axios');
// eslint-disable-next-line arrow-body-style
jest.mock('../logger', () => {
  return {
    logError: jest.fn(),
    debug: jest.fn(),
  };
});

describe('request', () => {
  it('make http request', () => {
    axios.mockResolvedValue('value');
    return request('/abc').then((result) => {
      expect(result).toEqual('value');
    });
  });
});
