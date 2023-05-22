module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier', //
  ],
  extends: [
    'eslint:recommended', //
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    'vue/setup-compiler-macros': true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', //
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'comma-dangle': ['error', 'always-multiline'],
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
