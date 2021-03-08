const OFF = 0 // eslint-disable-line no-unused-vars
const WARN = 1 // eslint-disable-line no-unused-vars
const ERROR = 2 // eslint-disable-line no-unused-vars

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  plugins: ['prettier'],
  extends: ['prettier', 'prettier/react'],
  rules: {
    'global-require': OFF,
    'no-irregular-whitespace': OFF,
    'no-nested-ternary': OFF,
    'import/prefer-default-export': OFF,
    'prettier/prettier': ERROR,
    'react/jsx-filename-extension': OFF,
    'react/react-in-jsx-scope': OFF,
    'jsx-a11y/anchor-is-valid': OFF,
    'jsx-a11y/click-events-have-key-events': OFF,
    'import/extensions': [
      ERROR,
      {
        js: OFF,
        ts: OFF,
        jsx: OFF,
        tsx: OFF,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
}
