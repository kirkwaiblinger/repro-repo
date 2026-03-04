import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from "@eslint/compat";
import path from 'node:path';

export default defineConfig(
  // works
  includeIgnoreFile(path.join(import.meta.dirname, '.gitignore')),
  // doesn't work
  includeIgnoreFile(path.join(import.meta.dirname, 'folder/.gitignore')),
  {
    rules: {
      'prefer-const': 'error'
    }
  }
)