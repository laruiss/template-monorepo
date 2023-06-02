require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin', //
    'prettier',
  ],
  extends: [
    'eslint:recommended', //
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'standard',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    'vue/setup-compiler-macros': true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'], //
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
  },
  overrides: [
    {
      files: ['cypress/support/*.{js,ts,jsx,tsx}', 'cypress/integration/*.{spec,e2e}.{js,ts,jsx,tsx}', 'src/**/*.ct.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
    {
      files: ['src/**/*.{spec,test}.{js,ts,jsx,tsx}'],
      env: {
        jest: true,
      },
    },
  ],
}
