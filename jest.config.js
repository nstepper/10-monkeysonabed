module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.js'],
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: ['**/*.js'],
    coverageReporters: ['lcov', 'text'],
    moduleFileExtensions: ['js'],
  };
  