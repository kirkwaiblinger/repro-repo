import js from '@eslint/js'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  js.configs.recommended,
  // Including the subsequent config crashes the lint run due to JS rules running on JSON.
  // Play with commenting/uncommenting this.
  {
    files: ["src/**/*.json"]
  }
)