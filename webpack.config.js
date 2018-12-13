const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html',
})

module.exports = (env, argv) => {
  const config = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: 'babel-loader',
          exclude: path.resolve(__dirname, 'node_modules'),
        },
      ],
    },
    plugins: argv.mode === 'production' ? [] : [htmlWebpackPlugin],
    resolve: {
      extensions: ['.js'],
    },
    // optimization: {
    //   runtimeChunk: { name: 'commons' },
    // },
    // optimization: {
    //   runtimeChunk: 'single',
    // },
    devtool: 'source-map',
    devServer: {
      port: 3001,
    },
  }
  if (argv.mode === 'production') {
    config.output.libraryTarget = 'commonjs2'
    config.externals = {
      react: 'commonjs react',
      'react-redux': 'commonjs react-redux',
    }
  }
  return config
}
