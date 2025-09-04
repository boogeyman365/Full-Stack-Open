// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    plugins: ["react"],
    settings: {
      react: {
        version: "detect"
      }
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "babel-eslint",
    env: {
      browser: true
    },
    rules: {
      "react/prop-types": "off",
      "semi": "error"
    }
  }
]);
