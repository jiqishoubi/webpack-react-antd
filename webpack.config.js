const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 注：以下这种形式可以全局生效
// :global(#lalala) {
//   color: red;
// }

const cssLoader = {
	loader: "css-loader",
	options: {
		// 启动css modules
		modules: {
			localIdentName: "[path][name]__[local]-_",
			mode: (resourcePath) => {
				if (resourcePath.indexOf("/node_modules/antd/") > -1 || resourcePath.indexOf("/node_modules/@ant-design/pro-layout") > -1) {
					return "global";
				}
				return "local";
			}
		}
	}
};

const lessLoader = {
	loader: "less-loader",
	options: {
		lessOptions: { javascriptEnabled: true }
	}
};

/**
 * config
 */
module.exports = {
	mode: "development", // development production
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true // 每次构建清理dist
	},
	module: {
		rules: [
			// 编辑jsx js
			{
				test: /\.(jsx|js)?$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							plugins: [
								"@babel/plugin-transform-runtime" // async wait
							]
						}
					}
				],
				include: path.resolve(__dirname, "src")
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			// 编译样式
			{
				test: /\.css$/i,
				use: ["style-loader", cssLoader]
			},
			{
				test: /\.less$/i,
				use: ["style-loader", cssLoader, lessLoader]
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", cssLoader, lessLoader]
			},
			// 编译文件
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				use: [
					{
						loader: "url-loader", // 小的文件转成base64
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"], // 引入组件的时候可以省略这些后缀
		// 设置路径别名
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	},
	devServer: {
		port: 8084,
		host: "0.0.0.0"
	}
};
