module.exports = {
    name: 'play-regression',
    displayName: 'regression-play',
    globals: {
      BASE_URL: 'https://datatables.net/examples/api/form.html'
    },
    preset: "jest-playwright-preset",
    globalSetup: 'jest-playwright-preset/setup',
    globalTeardown: 'jest-playwright-preset/teardown',
    setupFilesAfterEnv: [
      './jest.setup.js',
      'jest-playwright-preset/lib/extends.js',
    ],
    testEnvironment: './jest-environment.js',
    runner: 'jest-playwright-preset/runner',
    verbose: true,
  }