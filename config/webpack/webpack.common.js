const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    externals: [nodeExternals()],
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: './src/assets/',
            }],
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [ 
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false,
                    },
                  },
                  'css-loader'
                ],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
        ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, '../../', 'dist'),
      libraryTarget: 'umd',
      library: 'grams-ui',
      umdNamedDefine: true,
    },
};
