module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    globals: {
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
      page: true,
      REACT_APP_ENV: true,
    },
    rules: {
      'prefer-promise-reject-errors': 0, // reject里只能放new Error
      'prefer-destructuring': 0, // 必须使用解构
      'no-use-before-define': ['error', { functions: false }], // 声明之前不能使用，除了function变量提升
      radix: 0, // parseInt
      'global-require': 0,
      'no-restricted-syntax': 0, // for in
      'no-underscore-dangle': 0, // 不能使用下划线 _apply
    },
  };
  