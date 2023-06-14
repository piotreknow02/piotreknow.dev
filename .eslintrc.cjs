module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:svelte/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
    }
  ],
  rules: {
    "semi": 0,
  }
}
