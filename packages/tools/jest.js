module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  modulePathIgnorePatterns: ['node_modules', 'dist'],
};
