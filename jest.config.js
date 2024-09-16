module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'js'],
  testRegex: '.*\\.test\\.ts$', // Matches test files (e.g., *.test.ts)
  transform: {
    '^.+\\.ts$': 'ts-jest', // Use ts-jest for TypeScript files
  },
  collectCoverage: true, // Optional: Collect test coverage
  coverageDirectory: 'coverage', // Output directory for coverage reports
};
