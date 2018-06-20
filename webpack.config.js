//entry (will be app.js) -> output
const path = require('path');

// console.log(__dirname);
//console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/playground/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            //any time you see a js file that is not in node_modules, it needs to be run through babel
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [ 'style-loader', 
                    'css-loader',
                    'sass-loader'
                 ]
        }]
    },
    //for easier error handling
    devtool: 'cheap-module-eval-source-map',
    //so we can do yarn run dev-server in CLI
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
