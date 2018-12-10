// entry -> output
const path = require("path");

// create sperate css file
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isProduction = env === "production";
  // const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: { app: "./src/app.js" },
    mode: "development",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "[name]-[hash].bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s?css$/,
          //   use: CSSExtract.extract({
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: "css-loader", options: { sourceMap: true } },
            { loader: "sass-loader", options: { sourceMap: true } }
          ]
          //   })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8000,
                name: "images/[hash]-[name].[ext]",
                publicPath: "/dist/"
              }
            }
          ]
        }
      ]
    },
    // plugins: [CSSExtract],
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "public/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    devtool: isProduction ? "cheap-module-source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/"
    }
  };
};

// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             loader: 'babel-loader',
//             test: /\.js$/,
//             exclude: /node_modules/
//         },{
//             test: /\.scss$/,
//             use: [
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader'
//             ]
//         }]
//     },
//     devtool: 'cheap-module-eval-source-map',
//     devServer: {
//         contentBase: path.join(__dirname, 'public'),
//         historyApiFallback: true
//     }
// };

// loader, lets you customize the behavior of web pack when it loads a given file
