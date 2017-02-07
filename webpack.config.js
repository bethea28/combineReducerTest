module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] }
      },
      { test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ],
    loader: 'eslint',
    exclude: /node_modules/
  }
};
