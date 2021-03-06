const path = require("path"),
	webpack = require("webpack"),
	CleanWebpackPlugin = require("clean-webpack-plugin"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractPlugin = new ExtractTextPlugin({filename: "./assets/css/app.css"});
const config = {
	context: path.resolve(__dirname, "src"),
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},

	module: {
		rules: [

			// babel-loader and el-lint
			{
				test: /\.js$/,
				include: /src/,
				exclude: /node_modules/,
				use: [
					"babel-loader",
					"eslint-loader",
				],
			},

			// html-loader
			{test: /\.html$/, use: ["html-loader"]},

			// css-loader
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},

			// sass-loader with sourceMap activated
			{
				test: /\.scss$/,
				include: [path.resolve(__dirname, "src", "assets", "scss")],
				use: extractPlugin.extract({
					use: [
						{
							loader: "css-loader",
							options: {
								sourceMap: true
							}
						},
						{
							loader: "sass-loader",
							options: {
								sourceMap: true
							}
						}
					],
					fallback: "style-loader"
				})
			},
			// file-loader(for images)
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [{loader: "file-loader", options: {name: "[name].[ext]", outputPath: "./assets/media/"}}]
			},
			// file-loader(for fonts)
			{test: /\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"]}

		]
	},

	plugins: [
		// cleaning up only 'dist' folder
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			template: "index.html"
		}),
		// extract-text-webpack-plugin instance
		extractPlugin
	],

	devServer: {
		// static files served from here
		contentBase: path.resolve(__dirname, "./dist/assets/media"),
		compress: true,
		stats: "errors-only",
		open: true
	},

	devtool: "inline-source-map"

};

module.exports = config;
