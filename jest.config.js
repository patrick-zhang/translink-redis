// config file for jest, a unit testing framework.
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
  testEnvironment: 'node',
};
