const api = require('../api');

jest.mock('ioredis');

describe('api', () => {
  it('is truthy', () => {
    expect(api).toBeTruthy();
  });
});
