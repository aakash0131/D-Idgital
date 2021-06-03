const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './client/src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|svg|gif)$/,
                use: ['file-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|svg)$/,
            //     use: ['file-loader?name=public/fonts/[name].[ext]']
            //   }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({ template: 'client/public/index.html',favicon: 'client/public/images/icon.ico' }),
        new copyWebpackPlugin([{ from: 'client/public/images', to: 'images' }])
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 4003,
        historyApiFallback: true,
        hot: true
    }
};
