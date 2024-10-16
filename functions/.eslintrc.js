module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "script", // Use "script" for CommonJS
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", { "code": 100 }],
    "require-jsdoc": "off",
    // Disable the rule that forbids require() imports
    "@typescript-eslint/no-require-imports": "off", // This line can be removed since you're not using TypeScript
    "import/no-commonjs": "off", // Disable rule that forbids CommonJS
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};