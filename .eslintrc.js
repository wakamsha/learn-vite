module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['./tsconfig.json', './packages/**/tsconfig.json'],
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // Enable
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/dot-notation': ['error'],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'func-names': ['error'],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-case-declarations': ['error'],
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error', 'time', 'timeEnd'],
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: 'Do not declare enums',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-key': ['error'],
    'react/jsx-no-target-blank': ['error'],
    'react/sort-comp': ['error'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react-hooks/rules-of-hooks': ['error'],

    // Disable
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'class-methods-use-this': ['off'],
    'consistent-return': ['off'], // TypeScript のフロー解析を考慮できないため false positive が発生する
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': ['off'],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/accessible-emoji': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/interactive-supports-focus': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'jsx-a11y/media-has-caption': ['off'],
    'jsx-a11y/mouse-events-have-key-events': ['off'],
    'jsx-a11y/no-autofocus': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    // 'jsx-a11y/no-static-element-interactions': ['off'],
    'default-case': ['off'],
    'global-require': ['off'],
    'max-classes-per-file': ['off'],
    'no-bitwise': ['off'],
    'no-param-reassign': ['off'],
    'no-undef': ['off'],
    'no-use-before-define': ['off'],
    'no-useless-constructor': ['off'],
    'no-nested-ternary': ['off'],
    'no-plusplus': ['off'],
    'no-return-assign': ['off'],
    'no-shadow': ['off'],
    'no-throw-literal': ['off'],
    'no-unused-expressions': ['off'],
    'react/button-has-type': ['off'],
    'react/display-name': ['off'],
    'react/jsx-indent': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-array-index-key': ['off'],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/require-default-props': ['off'],
  },
  overrides: [
    {
      files: ['./**/stores/**/*.ts'],
      rules: {
        'react-hooks/rules-of-hooks': ['off'],
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
};
