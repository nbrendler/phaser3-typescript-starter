const path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".ts", ".js", ".json", ".css"]
  },

  entry: {
    app: "./src/game.ts"
  },

  plugins: [new HtmlWebpackPlugin({ title: "Game title" })],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "app")],
        loader: "ts-loader"
      }
    ]
  }
};
