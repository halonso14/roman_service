var OFF = 0,
  WARN = 1,
  ERROR = 2;

module.exports = exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'build'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    // allow console and debugger in development
    'no-console': process.env.NODE_ENV === 'production' ? ERROR : WARN,
    'no-debugger': process.env.NODE_ENV === 'production' ? ERROR : WARN,
    // warn: Something is defined but never used
    'no-unused-vars': [WARN, { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    // warn: Prefer default export
    'import/prefer-default-export': WARN,
    // warn: Something is already declared in the upper scope
    'no-shadow': [WARN, { builtinGlobals: false, hoist: 'functions', allow: [] }],
  },
  env: {
    browser: true,
    jest: true,
  },
};
