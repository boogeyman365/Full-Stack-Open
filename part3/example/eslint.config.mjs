import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin-js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
      '@stylistic/js': stylistic,
    },
    extends: ['js/recommended'],
    rules: {
      '@stylistic/js/indent': 'off',
      '@stylistic/js/linebreak-style': 'off',
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    ignores: ['package.json', 'package-lock.json', 'dist/**'],
  },
])
