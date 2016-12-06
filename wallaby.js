module.exports = function (w) {

  return {
    files: [
      'lib/**/*.ts',
      '!lib/**/*.test.ts'
    ],

    tests: [
      'lib/**/*.test.ts'
    ],

    env: {
      type: 'node'
    },

    // or any other supported testing framework:
    // https://wallabyjs.com/docs/integration/overview.html#supported-testing-frameworks
    testFramework: 'ava'
  };
};
