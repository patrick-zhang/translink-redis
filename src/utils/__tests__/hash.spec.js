const hash = require('../hash');

describe('hash util', () => {
  it('key always get same hex', () => {
    const key = 'abc';
    const expected = 'a9993e364706816aba3e25717850c26c9cd0d89d';
    expect(hash.toHash(key)).toEqual(expected);
  });
});
