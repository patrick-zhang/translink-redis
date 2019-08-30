require('webpack');

const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
};
