const fs = require('fs');
const path = require('path');
const { DefinePlugin } = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Add each file in lambdas directory as an entry point
// Use object syntax for entry point so that each lambda
// can be bundled into a single file with the same name
const lambdaDir = path.resolve(__dirname, 'src', 'lambdas');
let lambdaEntryPoints = {};
fs.readdirSync(lambdaDir).forEach(file => {
  lambdaEntryPoints[file] = `${lambdaDir}/${file}`;
});

module.exports = {
  target: 'node',
  entry: lambdaEntryPoints,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',   // File name in dist folder will be same as in lambdas folder
    libraryTarget: 'commonjs',
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
        keep_classnames: true,
        keep_fnames: true,
      },
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,         // No babelrc file used - all config is here
          comments: false,        // Don't include comments in output
          presets: [
            ['env', {
              'targets': {
                'node': '6.10',
              },
            }],
          ],
        },
      },
    }],
  },
};