const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: '/src/scripts/index.js', // Entry point for your JavaScript file
  output: {
    filename: 'bundle.js', // Output JavaScript bundle
    path: path.resolve(__dirname, 'assets'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.less$/, // Match all .less files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader', // Translates CSS into CommonJS
          'less-loader', // Compiles Less to CSS
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Match font files
        type: 'asset/resource', // Handle as static resources
        generator: {
          filename: '[name][ext]', // Output path for fonts
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../assets/theme.css', // Name of the output CSS file
    }),
  ],
};