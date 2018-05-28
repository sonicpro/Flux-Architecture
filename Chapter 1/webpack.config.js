module.exports = {
  mode: "development",
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'main-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
              presets: ["env"]
          }
      }
    ]
  }
}
