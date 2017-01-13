"use strict";

var webpack = require('webpack');
var path = require('path');
const {resolve} = require('path');
var loaders = require('./webpack.loaders');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var OfflinePlugin = require('offline-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

// global css
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\](src|flexboxgrid)[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css'
    ]
});
// local scss modules
loaders.push({
    test: /\.scss$/,
    exclude: /[\/\\](node_modules|bower_components|static|flexboxgrid)[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'postcss',
        'sass'
    ]
});

// local css modules
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\](node_modules|bower_components|static|flexboxgrid)[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]
});

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './jsx/core.jsx'
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
          webworkify: 'webworkify-webpack-dropin',
         'gl-matrix': resolve('./node_modules/gl-matrix/dist/gl-matrix.js')
        },
    },
    module: {
        loaders: loaders,
        postLoaders: [{
          include: /node_modules\/mapbox-gl/,
          loader: 'transform-loader',
          query: 'brfs',
        }],

    },
    devServer: {
        contentBase: "./static",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './html/index.html'
        }),
        new OfflinePlugin({
            AppCache: false
        })
    ],
    node: {
        fs: 'empty',
    },

};