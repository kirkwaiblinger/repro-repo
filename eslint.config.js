import { defineConfig } from 'eslint/config';

export default defineConfig({
  files: ['src/foo.js'],
  rules: {
    'prefer-const': 'error'
  }
});