const path = require('path');

module.exports = {
    entry: {
        "Playground": './wwwroot/src/Playground.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'wwwroot/js'),
        library: {
            type: "module",
        },
    },
    experiments: {
        outputModule: true
    },
    devtool: 'source-map'
};
