module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
    '@stylistic/js',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    '@stylistic/js/indent': [
      'error',
      2,
    ],
    '@stylistic/js/linebreak-style': [
      'error',
      'unix',
    ],
    '@stylistic/js/quotes': [
      'error',
      'single',
    ],
    '@stylistic/js/semi': [
      'error',
      'never',
    ],
  },
};
