module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    moduleFileExtensions: ["js", "jsx"],
    testMatch: ["*/src/.test.js", "*/src/.test.jsx"]
  };
  