import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: true,
    typescript: true,
    vue: true,
  },
  {
    rules: {
      'no-irregular-whitespace': 'warn',
      'vue/no-irregular-whitespace': 'warn',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
    },
  },
)
