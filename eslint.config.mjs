import { arvinn } from '@arvinn/eslint-config'

export default arvinn(
  [
    {
      files: ['src/**/*.ts'],
      rules: {
        'perfectionist/sort-objects': 'error',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/*.md/*'],
      rules: {
        'sort-imports': 'off',
      },
    },
    {
      files: ['src/**/*.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],

  {
    vue: true,
    prettier: true,
  },
)
