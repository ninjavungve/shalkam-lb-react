var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: "src/client",
  publicPath: '/public',
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8080/');
});