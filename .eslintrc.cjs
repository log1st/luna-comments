module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    "plugin:prettier/recommended"
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': [0],
    'import/no-unresolved': [0],
    'import/prefer-default-export': [0],
    'react/jsx-filename-extension': [0],
    'import/extensions': [0],
    'no-shadow': [0],
    'no-unused-vars': [0],
    'react/require-default-props': [0]
  }
};
