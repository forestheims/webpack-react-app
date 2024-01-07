module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '^d3$': '<rootDir>/test/d3.js',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
};
