const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js',
    print: './src/print.js'
  },
  output: {
    // filename: '[name].[chunkhash].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/build')
  },
  plugins: [
    new CleanWebpackPlugin(['public/build']),
    new webpack.LoaderOptionsPlugin({
        vue: {
            loader: {
                js: 'babel-loader'
            }
        }
    })
  ],
  module: {
    rules: [
      {
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'] // Transpile the ES6 to es2015 standard
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'  // Resolving the vue var for standalone build
		}
	}
};
