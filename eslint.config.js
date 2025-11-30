import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: globals.node, // Changed from browser to node since you're using Express
    },
    rules: {
      'prettier/prettier': 'error',
      semi: 'error',
      'no-unused-vars': 'warn',
      'no-console': 'error',
    },
  },
];
