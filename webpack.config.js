const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/index.ts",
    demo: "./demo.ts",
  },
  output: {
    globalObject: "this",
    filename: "[name].js",
    path: `${__dirname}/dist`,
    libraryTarget: "umd",
    library: "scrollio",
    umdNamedDefine: true,
    publicPath: "/",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    alias: {},
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "Scrollio",
    }),
    new CopyWebpackPlugin({ patterns: [{ from: `${__dirname}/*.md` }] }),
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [/node_modules.*/],
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
  },
};
