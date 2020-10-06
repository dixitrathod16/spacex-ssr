var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

var browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
        {
            test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: "file-loader",
            options: {
              name: "public/media/[name].[ext]",
              publicPath: url => url.replace(/public/, "")
            }
        },
        {
            test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: '/public/css/',
                        },
                    },
                    'css-loader'
                ]
        },
        { 
            test: /\.(js)$/,
            use: 'babel-loader'
        },
    ]
  },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: '[id].css',
      }),
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  mode: 'production',
  module: {
    rules: [
        {
            test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: "file-loader",
            options: {
              name: "public/media/[name].[ext]",
              publicPath: url => url.replace(/public/, ""),
              emit: false
            }
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: "css-loader"
              }
            ]
          },
          { 
              test: /\.(js)$/, 
              use: 'babel-loader' 
          },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]