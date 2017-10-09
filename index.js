var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs-extra');
var commonmark = require("commonmark");
var formatString = require("./lib/formatString");
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

let projectDir = path.join(__dirname, './dist/www');
let tpl;

var webpack = require('webpack');
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
config.watch = true;
let compiler = webpack(config, ()=>{

  tpl = fs.readFileSync(path.join(projectDir, 'index.html'), 'utf8');
  console.log('###################################');
});

// let tpl = fs.readFileSync(path.join(projectDir, 'index.html'), 'utf8');

var app = express();
app.use(require('compression')(), express.static(projectDir));
app.use('/', function(req, res) {
  let fileName = req.path;
  console.log(';', fileName, ';');
  if(fileName == '/'){
    fileName = '/menu.md';
  }
  let filePath = path.join(__dirname, '_posts', fileName);

  if(!/\.md$/.test(filePath)){
    filePath = `${filePath}.md`;
  }
  fs.readFile(filePath, 'utf8', (err, data)=> {
    if(err){
      res.end();
      return ;
    }
    var content = `<article class="markdown-body">${writer.render(reader.parse(data))}</article>`; // content is a String
    let HTML = formatString(tpl, {post_content: JSON.stringify(content)});
    res.type('html');
    res.end(HTML);
  });
});

// app.use(webpackDevMiddleware(compiler, {
//   noInfo: true,
//   // publicPath: config.output.publicPath
// }));
//
// app.use(webpackHotMiddleware(compiler));

app.listen(80, function () {
  var host = this.address().address;
  var port = this.address().port;

  console.log('listening at http://%s:%s', host, port);
});
