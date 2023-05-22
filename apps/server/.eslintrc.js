module.exports = {
  root: true,
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  extends: [
    "@dummy/custom"
  ],
  rules: {
    'no-useless-constructor': 'off'
  },
}
