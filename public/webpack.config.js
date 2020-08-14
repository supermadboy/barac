const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
      main: './src/index.js',
      style: './styles/styles.scss',
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist'
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
                // Compiles Sass to CSS
                'sass-loader',
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
    ],
  };
