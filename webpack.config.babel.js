const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

export default {
  entry: {
    app: path.resolve(__dirname, "src", "index.js")
  },

  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js"
  },

  devtool: "source-map",

  watch: true,

  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: "[local]--[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-css-reset")(),
                require("autoprefixer")()
              ]
            }
          },
          "sass-loader"
        ],
        include: [
          /src/
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    })
  ]
};
