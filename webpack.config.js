
var path = require('path');

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
        }]
    }
}