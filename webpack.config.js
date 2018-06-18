const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/index.ts",
    mockText: "./mock_text.ts"
},
  output: {
    filename: "[name].js",
    path: `${__dirname}/dist`,
    libraryTarget: "umd",
    library: "scrollio",
    umdNamedDefine: true,
    publicPath: "/"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    alias: {
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "Scrollio"
    }),
    new CopyWebpackPlugin([ {from: `${__dirname}/*.md`} ])
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [/node_modules.*/]
      },
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0"
  },
};
