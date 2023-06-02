/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parserOptions: {
    project: ['tsconfig.eslint.json', 'tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  extends: [
    "@dummy/custom"
  ],
}
