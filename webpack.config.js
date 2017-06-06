const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        // loaders: [{
        //     test: /\.js$/,
        //     exclude: /(node_modules|bower_components)/,
        //     loader: 'babel-loader',
        //     query: {
        //         presets: ['react', 'es2015', 'stage-1']
        //     }
        // }]
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
