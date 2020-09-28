module.exports = {
  parser: "@babel/eslint-parser",
  extends: "optimum-energy",
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    sourceType: "module"
  }
};
