const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');


module.exports = {
	mode: 'development', // production | development
	entry: './src/index.js', // punct de intrare
	output: { // punct de iesire
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		client: {
			progress: true,
		},
	}
};
