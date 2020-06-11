const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDevelopmentMode = process.env.NODE_ENV === 'development';
const isProductionMode = !isDevelopmentMode;

function makeOptimization() {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProductionMode) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
}

function createFileName(fileExtension) {
  if (isDevelopmentMode) {
    return `[name].${fileExtension}`;
  }

  return `[name].[hash].${fileExtension}`;
}

function setPlugins() {
  const basePlugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProductionMode,
        removeComments: isProductionMode,
        removeRedundantAttributes: isProductionMode,
        removeScriptTypeAttributes: isProductionMode,
        removeStyleLinkTypeAttributes: isProductionMode,
        useShortDoctype: isProductionMode,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/favicon.ico'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: createFileName('css'),
    }),
  ];

  if (isProductionMode) {
    basePlugins.push(new BundleAnalyzerPlugin());
  }

  return basePlugins;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: { main: ['@babel/polyfill', './index.js'] },
  output: {
    filename: createFileName('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.css', '.jpg', '.png', '.svg', '.json'],
  },
  optimization: makeOptimization(),
  devServer: {
    port: 9000,
    hot: isDevelopmentMode,
  },
  devtool: isDevelopmentMode ? 'source-map' : '',
  plugins: setPlugins(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopmentMode,
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopmentMode,
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
};
