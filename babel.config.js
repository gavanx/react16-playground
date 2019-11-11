module.exports = function (api) {
  api.cache(true)

  const plugins = [
    // antd 组件按需引入
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
      }
    ],
    // lodash 方法按需引入
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false
      },
      'importLodashOnNeed'
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ]

  return {
    plugins
  }
}
