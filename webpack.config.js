const webpack = require('webpack');

module.exports = {
    entry: {
        index: './index.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    
};
