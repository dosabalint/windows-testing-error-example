/* eslint-disable */
export default {
  displayName: 'feature-cider',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/feature-cider',
  moduleNameMapper: {
    '@windows-testing-error-example/feature-apple/(.*)': "<rootDir>../../libs/feature-apple/src/lib/$1"
  },
};
