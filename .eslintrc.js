module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    parserOptions: {
      project: [
        './tsconfig.json',
      ],
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      "prettier"
    ],
    ignorePatterns: ['.eslintrc.js'],
    env: {
      'node': true,
    },
    rules: {
      // TODO(Kelosky): we can disable this
      "@typescript-eslint/restrict-template-expressions": ["warn", { "allowBoolean": true }],
      "@typescript-eslint/no-floating-promises": "allow"
    }
  };