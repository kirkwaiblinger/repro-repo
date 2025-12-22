import js from '@eslint/js'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  js.configs.recommended,
  // Including the subsequent config this lint run due to JS rules running on JSON.
  {
    files: ["src/**/*.json"]
  }
)