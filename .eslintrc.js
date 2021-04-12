module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
  }
};
