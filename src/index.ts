interface ConfigOption {
  vue: boolean
}
function createESLintConfig(options: ConfigOption = { vue: false }) {
  const { vue } = options

  const rules: Record<string, any> = {
    'camelcase': 'off',
    'no-mixed-operators': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-use-before-define': 'off',
    'prefer-destructuring': 'off',
    'max-classes-per-file': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'no-unused-vars': 'warn',

    'global-require': 'off',
    'no-underscore-dangle': 'off',
    // 'no-plusplus': 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'prefer-const': 'warn',
    'no-shadow': 'off',
    'no-bitwise': 'warn',
    'no-restricted-syntax': 'off',
    'object-curly-newline': 'off',

    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  }

  if (vue) {
    rules['vue/block-order'] = ['error', {
      order: [['template', 'script'], 'style'],
    }]
  }
  return {
    rules,
  }
}

export {
  createESLintConfig,
}
export default {}
