import {workspaceRoot} from "nx/src/utils/app-root";
import {pathsToModuleNameMapper} from "ts-jest";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require(workspaceRoot +'/tsconfig.base.json');

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
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: workspaceRoot + '/' } )
};
