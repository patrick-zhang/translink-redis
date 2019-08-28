const forge = require('node-forge');

const toHash = (key) => {
  const md = forge.md.sha512.create();
  md.update(key);
  return md.digest().toHex();
};

module.exports = {
  toHash,
};
