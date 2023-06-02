module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'prettier','unused-imports'],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-console': 'off',
    'max-len': 'off',
    'no-restricted-syntax': 'warn',
    'no-new': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' }
    ],
    'max-classes-per-file': 'off',
    'prettier/prettier': ['error'],
  },
  ignorePatterns: ['.eslintrc.cjs', '*.js'],
};
