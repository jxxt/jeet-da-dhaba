const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: './src/index.js',

    plugins: [
        new HtmlWebpackPlugin({
            title: 'jeet da dhaba',
            template: './src/index.html'
        }),
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};