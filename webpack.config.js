
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['babel-polyfill', join(__dirname, 'src/main.jsx')],
    //{ main: join(__dirname, 'src/main.jsx'), },
    //['babel-polyfill', join(__dirname, 'src/main.jsx')],
    output: {
        filename: 'app.js',
        path: join(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    }, 'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|webp|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            template: join(__dirname, 'src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css',
            path: join(__dirname, 'src/index.html'),
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@utils': join(__dirname, 'src/utils'),
        }
    },

    devServer: {
        historyApiFallback: true,
        contentBase: join(__dirname, 'dist'),
    }
}