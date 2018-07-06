//entry (will be app.js) -> output
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// console.log(__dirname);
//console.log(path.join(__dirname, 'public'));

module.exports = env => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");
  //console.log('env', env);
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
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
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    // Source mapping based on whether we are using development or production mode
    // 'Source-map' is an external file
    devtool: isProduction ? "source-map" : "inline-source-map",
    //so we can do yarn run dev-server in CLI
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
