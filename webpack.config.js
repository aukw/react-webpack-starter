
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'dist.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{ 
        	test: /\.js|jsx$/, 
        	exclude: /(node_modules|bower_components)/,
        	loader: 'babel',
        	query: {
    	        presets: ['es2015', 'react']
    	    }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
        }]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: '精选推荐 — 易信公众平台',
            template: './src/index.html',
            inject: 'body'
        })
    ]
}