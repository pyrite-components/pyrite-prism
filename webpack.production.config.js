const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, './app/component/index'),
    devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'app.bundle.js'
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},

	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			loaders: ['ts-loader']
		}, {
			test: /\.css$/,
			include: /node_modules/,
			loaders: ['style-loader', 'css-loader']
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loaders: ['file-loader?name=fonts/[name].[ext]']
        }]
    },
    
    plugins: [
        new MinifyPlugin()
    ]
}