//entry (will be app.js) -> output
const path = require("path");

// console.log(__dirname);
//console.log(path.join(__dirname, 'public'));

module.exports = (env) => {
    const isProduction = env === 'production';
    //console.log('env', env);
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          //any time you see a js file that is not in node_modules, it needs to be run through babel
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    // Source mapping based on whether we are using development or production mode
    // 'Source-map' is an external file
    devtool: isProduction ?  "source-map" : "cheap-module-eval-source-map",
    //so we can do yarn run dev-server in CLI
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};
