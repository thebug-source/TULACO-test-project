
const config = require('./webpack.config');
const package = require('./package.json');
const webpack = require('webpack');


module.exports = {
    ...config,
    mode: 'production',

    plugins: [
        ...config.plugins,
        new webpack.DefinePlugin({
            isProduction: `true`,
        }),
    ]
}