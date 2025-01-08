import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslint from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier'
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslint.configs.recommended,
  pluginJs.configs.recommended,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error'],
    },
  },
]
