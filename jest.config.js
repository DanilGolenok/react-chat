// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	clearMocks: true,
	preset: 'ts-jest',
	timers: 'fake',
	moduleNameMapper: {
		'src/(.*)': '<rootDir>/src/$1',
		'tests/(.*)': '<rootDir>/__tests__/$1',
	},
	moduleDirectories: ['src', 'node_modules'],
};
