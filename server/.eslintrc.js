module.exports = {
  'env': {
    'node': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': ['error', {allow: ['info', 'warn', 'error']}],
  }
};