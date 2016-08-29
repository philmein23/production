var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'babel-polyfill',
        './app/js/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
          { test: /\.js$/, include: __dirname + '/app', loader: 'babel-loader' },
          { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
  },
    plugins: [HTMLWebpackPluginConfig]
};