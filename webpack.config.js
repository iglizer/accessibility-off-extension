module.exports = {
    entry: './src/scripts/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map'
};