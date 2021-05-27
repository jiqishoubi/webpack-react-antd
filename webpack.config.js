const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssLoader = {
  loader: 'css-loader',
  options: {
    // 启动css modules
    modules: {
      localIdentName: "[path][name]__[local]-_"
    },
  },
}
// 注：以下这种形式可以全局生效
// :global(#lalala) {
//   color: red;
// }

module.exports = {
  mode: 'development', // development production
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 每次构建清理dist
  },
  module: {
    rules: [
      // 编辑jsx js
      {
        test: /\.(jsx|js)?$/,
        use: ["babel-loader"],
        include: path.resolve(__dirname, 'src'),
      },
      // 编译样式
      {
        test: /\.css$/i,
        use: ['style-loader', cssLoader],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          cssLoader,
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          cssLoader,   // 将 CSS 转化成 CommonJS 模块
          "sass-loader",  // 将 Sass 编译成 CSS
        ],
      },
      // 编译文件
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'url-loader', // 小的文件转成base64
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: '管理输出',
    }),
  ],
  devServer: {
    port: 8080,
    host: '0.0.0.0',
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"], // 引入组件的时候可以省略这些后缀
    // 设置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
};