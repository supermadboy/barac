const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
      main: './src/index.js',
      style: './styles/styles.scss',
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist',
      libraryTarget: 'var',
      library: 'Helpers'
    },
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                // Translates CSS into CommonJS
                'css-loader',
                // Translates CSS into CommonJS
                'postcss-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
          },
          {
            test: /\.(woff(2)?)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/fonts/'
                    },
                },
            ],
          },
          {
            test: /\.(png)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/images/'
                    },
                },
            ],
          },
        ],
      },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
        }),
        new CopyPlugin({
            patterns: [
              { from: 'assets', to: 'assets' },
              { from: 'assets/images', to: 'assets/images' },
              { from: 'index.html', to: 'index.html' },
              { from: 'robots.txt', to: 'robots.txt' },
              { from: 'favicon.ico', to: 'favicon.ico' },
            ],
          }),
    ],
  };
