module.exports = {
  extends: ["eslint:recommended", "prettier"],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: "module",
  },
};
