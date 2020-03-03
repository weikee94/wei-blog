// entry -> output
const path = require("path");

// create sperate css file
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CleanWebpackPlugin = require("clean-webpack-plugin");

let pathsToClean = ["dist"];

let cleanOptions = {
  root: path.join(__dirname, "public")
};
module.exports = env => {
  const isProduction = env === "production";
  // const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: { app: "./src/app.js" },
    mode: "development",
    output: {
      path: path.join(__dirname, "public", "dist"),
      // filename: "[name]-[hash].bundle.js",
      filename: "bundle.js",
      publicPath: "/"
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
          test: /\.(png|jp?g|gif|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images"
              }
            }
          ]
        }
        // {
        //   test: /\.(jpe?g|png|gif|svg)$/i,
        //   use: [
        //     {
        //       loader: "url-loader",
        //       options: {
        //         limit: 8000,
        //         name: "images/[hash]-[name].[ext]",
        //         publicPath: "/dist/",
        //         fallback: "file-loader"
        //       }
        //     },
        //     {
        //       loader: "image-webpack-loader"
        //     }
        //   ]
        // }
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
      // new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ],
    devtool: isProduction ? "cheap-module-source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/",
      allowedHosts: ["www.wkee0701.com"]
    },
    mode: "production"
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
