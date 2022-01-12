module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double",{ allowTeamlateLiterals: true}], 
    indent: ["error", "4"],
    "eol-last": ["error", "never"],
    "linebreak-style": 0,
  },
};
