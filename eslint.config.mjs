// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';

export default [
  // Tell ESLint which files to lint
  {
    files: ['src/js/**/*.js'],
    ignores: [
      'dist/**',
      'node_modules/**',
      'src/js/*polyfill.js', // ignore your polyfills
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'script',
      globals: {
        ...globals.browser, // window, document, etc.
        $: 'readonly', // allow jQuery if you use it
        jQuery: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Your preferences:
      quotes: ['error', 'single'],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  },

  // Turn off stylistic rules that conflict with Prettier
  {
    rules: {
      // eslint-config-prettier in flat config style
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      // (eslint-config-prettier disables a bunch automatically when used via "extends" in legacy config.
      // In flat config, we rely on Prettier to format and keep ESLint for code-quality. The VS Code formatter handles Prettier.)
    },
  },
];
