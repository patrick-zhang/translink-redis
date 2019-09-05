const crypto = require('crypto');

const toHash = (key) => {
  const hash = crypto.createHash('md5');
  hash.update(key);
  return hash.digest('hex');
};

module.exports = {
  toHash,
};
