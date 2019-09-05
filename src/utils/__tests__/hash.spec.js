const hash = require('../hash');

describe('hash util', () => {
  it('key always get same hex', () => {
    const key = 'abc';
    const expected = '900150983cd24fb0d6963f7d28e17f72';
    expect(hash.toHash(key)).toEqual(expected);
  });
});
