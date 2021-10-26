module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
    moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/components$1',
        '^@pages(.*)$': '<rootDir>/pages$1',
        '^@hooks(.*)$': '<rootDir>/hooks$1',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
};
