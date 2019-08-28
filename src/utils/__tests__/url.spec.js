const url = require('../url');

describe('url util', () => {
  it('get path and query', () => {
    const path = '/info';
    const query = {
      limit: 3,
      sort: 1,
    };
    const expected = '/info?limit=3&sort=1&apikey=undefined';
    expect(url.getPathQuery(path, query)).toEqual(expected);
  });
  it('get path only', () => {
    const path = '/info';
    const query = null;
    const expected = '/info';
    expect(url.getPathQuery(path, query)).toEqual(expected);
  });
});
